---
date: 2024-04-02
category: 
 - Tools
tags: 
 - Tools
---
# Docker

## Tips

### Docker 容器内走代理
[docker 容器内使用宿主机的代理配置 | Zach Ke's Notes](https://kebingzao.com/2019/02/22/docker-container-proxy/)

Docker版本17.06以上
```bash
vim ~/.docker/config.json
```
加入
```json
{
	"proxies":
	{
	   "default":
	   {
	     "httpProxy": "http://127.0.0.1:8118",
	     "httpsProxy": "http://127.0.0.1:8118",
	     "noProxy": "localhost"
	   }
	}
}
```
可能会遇到 Docker:Error loading config file 这个问题
[Docker:Error loading config file_Regin WONG的博客-CSDN博客](https://blog.csdn.net/JerryITGO/article/details/105785714)

```bash
# 将当前用户添加到docker组
sudo usermod -aG docker $USER
或
sudo gpasswd -a $USER docker
```

重启Docker
```bash
sudo systemctl restart docker
```

设置目录及其所有文件的权限
```bash
sudo chown $USER:docker /home/$USER/.docker -R

sudo chmod g+rwx /home/$USER/.docker -R
```

重新创建docker容器··

```bash
docker run -it --net host ubuntu-vim:20.04 /bin/bash
```

取消代理，进入容器，修改http的地址就行。。
```bash
docker start ...
docker exec -it ... /bin/bash
vim ~/.bashrc 
```

### Docker 运行ROSrviz 可视化

[docker/Tutorials/Hardware Acceleration - ROS Wiki](http://wiki.ros.org/docker/Tutorials/Hardware%20Acceleration#nvidia-docker1)

[docker中使用cuda、opengl、ros，支持rviz可视化_Vincent_PHY的博客-CSDN博客_cuda+opengl docker images](https://blog.csdn.net/sinat_37141443/article/details/115461863)

[Docker内运行ROS(melodic版本)以及使用Rviz_冷色调的夏天的博客-CSDN博客_docker ros](https://blog.csdn.net/qq_40695642/article/details/117607446?utm_medium=distribute.pc_relevant.none-task-blog-2~default~BlogCommendFromBaidu~default-6.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2~default~BlogCommendFromBaidu~default-6.control)

First create a directory with a Dockerfile and entrypoint script inside.
```bash
mkdir my_melodic_image & cd my_melodic_image
touch Dockerfile
```
Paste the following content into the Dockerfile.

```bash
FROM osrf/ros:melodic-desktop-full

# nvidia-container-runtime
ENV NVIDIA_VISIBLE_DEVICES \
    ${NVIDIA_VISIBLE_DEVICES:-all}
ENV NVIDIA_DRIVER_CAPABILITIES \
    ${NVIDIA_DRIVER_CAPABILITIES:+$NVIDIA_DRIVER_CAPABILITIES,}graphics
```

Build the image. Don't forget the period at the end of that command.
```bash
cd my_melodic_image/
docker build -t my_melodic_image .
```

Now create a script to run the image called run_my_image.bash
```bash
XAUTH=/tmp/.docker.xauth
if [ ! -f $XAUTH ]
then
    xauth_list=$(xauth nlist :0 | sed -e 's/^..../ffff/')
    if [ ! -z "$xauth_list" ]
    then
        echo $xauth_list | xauth -f $XAUTH nmerge -
    else
        touch $XAUTH
    fi
    chmod a+r $XAUTH
fi

docker run -it \
    --env="DISPLAY=$DISPLAY" \
    --env="QT_X11_NO_MITSHM=1" \
    --volume="/tmp/.X11-unix:/tmp/.X11-unix:rw" \
    --env="XAUTHORITY=$XAUTH" \
    --volume="$XAUTH:$XAUTH" \
    --runtime=nvidia \
    my_melodic_image \
    bash
```
docker run 换行结尾不能有空格。。。。不然就无法识别。。。。

Make the script executable
```bash
chmod a+x run_my_image.bash
```

Execute the script
```bash
./run_my_image.bash
```

```bash
roscore > /dev/null & rosrun rviz rviz
```

### 解决容器挂载文件权限问题

当把容器中的文件拷贝到主机时，复制出来的文件权限是root。。
[解决 Docker 数据卷挂载的文件权限问题 - 简书](https://www.jianshu.com/p/83d787d50b61)

在主机中添加的文件，在容器中可以进行修改。。并且权限还是主机的权限。。

在容器中添加的文件，在主机中就需要在root超级用户下才能修改。

或者用chmod修改权限
[linux修改文件夹下所有文件的权限](https://blog.csdn.net/qq_41996454/article/details/109689314)
```bash
sudo chmod -R 777 文件夹
```

### Docker 删除镜像依赖关系

在Docker中，镜像之间存在一种层次结构，其中父镜像和子镜像之间可以共享相同的文件层。这个层次结构被称为“联合文件系统”（Union File System）。这意味着子镜像可以构建在一个父镜像的基础之上，并且可以共享相同的文件层，从而节省磁盘空间。

当你创建一个新的镜像时，它会在已有的镜像层次结构上添加新的层，这些新层包含了你在Dockerfile中定义的改变（例如添加文件、修改文件等）。这些新层不会复制整个文件系统，而是只存储相应的差异。

因此，当你删除一个父镜像时，如果存在以该父镜像为基础的子镜像，这些子镜像会依赖于父镜像的某些层。这可能会导致你无法直接删除父镜像，因为删除父镜像的同时会破坏子镜像的依赖关系。

要想删除一个父镜像，你可能需要先删除依赖于该父镜像的子镜像，然后再删除父镜像。这确保了Docker镜像层次结构的完整性，同时也确保了子镜像可以继续正常运行。

总结起来，Docker镜像之间共享相同的文件层，父子镜像的层次结构是分开计算空间的，但是子镜像可能会依赖于父镜像的层，因此删除父镜像需要注意依赖关系。

所以，想要删除有依赖关系的镜像应该只能将镜像保存下来重新load。

```bash
docker commit my_workspace ubuntu-desktop:20.04-cu11.0.3
docker save -o ubuntu-desktop.tar ubuntu-desktop:20.04-cu11.0.3
docker load -i ubuntu-desktop.tar 
```

### Docker 挂载USB
直接加这两句，可以热插拔。。。
```bash
--privileged=true -v /dev:/dev
```

### Docker push 上传镜像
[Docker镜像推送（push）到Docker Hub](https://blog.csdn.net/lxy___/article/details/105821141)

```bash
docker login
docker tag XX:v1 username/XX:v1
docker push username/XX:v1
```

### Docker 卸载

#### Linux
[Install Docker Engine on Ubuntu | Docker Docs](https://docs.docker.com/engine/install/ubuntu/#uninstall-docker-engine)

```bash
sudo apt-get purge docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin docker-ce-rootless-extras
sudo rm -rf /var/lib/docker
sudo rm -rf /var/lib/containerd
```

