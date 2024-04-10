import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o,c as r,b as a,e,f as s,d as t}from"./app-n3N_lIkP.js";const d={},p=a("h1",{id:"flatpak",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#flatpak"},[a("span",null,"Flatpak")])],-1),c=a("h2",{id:"介绍",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#介绍"},[a("span",null,"介绍")])],-1),u={href:"https://zhuanlan.zhihu.com/p/267160794",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.flatpak.org/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://docs.flatpak.org/en/latest/introduction.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://flathub.org/home",target:"_blank",rel:"noopener noreferrer"},h=a("p",null,"简单来说，就是打包所有软件需要的依赖项和环境，可以快速的在任何linux发行版上运行，并且使用沙盒应用程序有一定的安全性。坏处是比较占用磁盘空间。",-1),k=a("h2",{id:"安装",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#安装"},[a("span",null,"安装")])],-1),f={href:"https://www.flatpak.org/setup/Ubuntu",target:"_blank",rel:"noopener noreferrer"},g=t(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> flatpak
<span class="token comment"># 对于较旧的Ubuntu版本</span>
<span class="token function">sudo</span> add-apt-repository ppa:flatpak/stable
<span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> flatpak 
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> gnome-software-plugin-flatpak
<span class="token comment"># 添加Flatbug存储库</span>
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令"><span>常用命令</span></a></h2>`,2),_={href:"https://docs.flatpak.org/en/latest/using-flatpak.html",target:"_blank",rel:"noopener noreferrer"},x=t(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 搜索应用程序</span>
flatpak search gimp
<span class="token comment"># 安装应用程序</span>
flatpak <span class="token function">install</span> flathub org.gimp.GIMP
<span class="token comment"># 从flatpak1.2开始，该命令可以搜索应用程序</span>
flatpak <span class="token function">install</span> gimp
<span class="token comment"># 运行应用程序</span>
flatpak run org.gimp.GIMP
<span class="token comment"># 更新</span>
flatpak update
<span class="token comment"># 列出已安装的应用程序和包</span>
flatpak list 
<span class="token comment"># 仅列出已安装的应用程序</span>
flatpak list <span class="token parameter variable">--app</span>
<span class="token comment"># 删除应用程序</span>
flatpak uninstall org.gimp.GIMP
<span class="token comment"># 删除已安装的应用程序未使用的包</span>
flatpak uninstall <span class="token parameter variable">--unused</span>
<span class="token comment"># 修复与本地安装的不一致</span>
flatpak repair
<span class="token comment"># 查看当前正在运行的应用程序</span>
flatpak <span class="token function">ps</span>
<span class="token comment"># 强制终止一个程序</span>
flatpak <span class="token function">kill</span> <span class="token operator">&lt;</span>application-id<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tips" tabindex="-1"><a class="header-anchor" href="#tips"><span>Tips</span></a></h2><h3 id="flatseal-权限管理" tabindex="-1"><a class="header-anchor" href="#flatseal-权限管理"><span>Flatseal 权限管理</span></a></h3>`,3),F={href:"https://linux.cn/article-14736-1.html",target:"_blank",rel:"noopener noreferrer"},z=t(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>flatpak <span class="token function">install</span> <span class="token parameter variable">--system</span> <span class="token parameter variable">-y</span> flathub com.github.tchx84.Flatseal
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="flatpak安装软件历史版本" tabindex="-1"><a class="header-anchor" href="#flatpak安装软件历史版本"><span>Flatpak安装软件历史版本</span></a></h3><p>由于安装的obsidian自动升级到了1.0.0，所以进行软件回溯。</p>`,3),w={href:"https://gist.github.com/barseghyanartur/e8649f6c269b089a8e777d8bd934a952",target:"_blank",rel:"noopener noreferrer"},I=t(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>flatpak remote-info <span class="token parameter variable">--log</span> flathub us.zoom.Zoom
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Output</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ flatpak remote-info <span class="token parameter variable">--log</span> flathub us.zoom.Zoom
        ID: us.zoom.Zoom
       Ref: app/us.zoom.Zoom/x86_64/stable
      Arch: x86_64
    Branch: stable
Collection: org.flathub.Stable
  Download: <span class="token number">134.4</span> kB
 Installed: <span class="token number">159.7</span> kB
   Runtime: org.freedesktop.Platform/x86_64/21.08
       Sdk: org.freedesktop.Sdk/x86_64/21.08

    Commit: c82bfaaa1e765d92037e64f496836cae99413f979945faef9ce20fe9f9a3bb03
    Parent: a4a6a5c0c55a06ed7786276c9758baf7578e30bc1db4dd5d267cbb39d18884d3
   Subject: Update zoom.tar.xz to <span class="token number">5.10</span>.0.2450 <span class="token punctuation">(</span>eb405f5c<span class="token punctuation">)</span>
      Date: <span class="token number">2022</span>-03-22 05:54:16 +0000
   History: 

    Commit: a4a6a5c0c55a06ed7786276c9758baf7578e30bc1db4dd5d267cbb39d18884d3
   Subject: Update zoom.tar.xz to <span class="token number">5.9</span>.6.2225 <span class="token punctuation">(</span>32830a02<span class="token punctuation">)</span>
      Date: <span class="token number">2022</span>-02-28 <span class="token number">11</span>:58:24 +0000

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="install-a-specific-version" tabindex="-1"><a class="header-anchor" href="#install-a-specific-version"><span>Install a specific version</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>flatpak update <span class="token parameter variable">--commit</span><span class="token operator">=</span>a4a6a5c0c55a06ed7786276c9758baf7578e30bc1db4dd5d267cbb39d18884d3 us.zoom.Zoom
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5);function T(y,S){const n=i("ExternalLinkIcon");return o(),r("div",null,[p,c,a("p",null,[a("a",u,[e("什么是Flatpak？ - 知乎"),s(n)])]),a("p",null,[a("a",m,[e("Flatpak—the future of application distribution"),s(n)])]),a("p",null,[a("a",b,[e("Introduction to Flatpak — Flatpak documentation"),s(n)])]),a("p",null,[a("a",v,[e("Flathub—An app store and build service for Linux"),s(n)])]),h,k,a("p",null,[a("a",f,[e("Flatpak—the future of application distribution"),s(n)])]),g,a("p",null,[a("a",_,[e("Using Flatpak — Flatpak documentation"),s(n)])]),x,a("p",null,[a("a",F,[e("分享|使用 Flatseal 管理 Flatpak 的权限"),s(n)])]),z,a("p",null,[a("a",w,[e("https://gist.github.com/barseghyanartur/e8649f6c269b089a8e777d8bd934a952"),s(n)])]),I])}const P=l(d,[["render",T],["__file","Flatpak.html.vue"]]),Z=JSON.parse('{"path":"/docs/tools/Flatpak.html","title":"Flatpak","lang":"zh-CN","frontmatter":{"date":"2024-04-02T00:00:00.000Z","category":["Tools"],"tags":["Tools"]},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"常用命令","slug":"常用命令","link":"#常用命令","children":[]},{"level":2,"title":"Tips","slug":"tips","link":"#tips","children":[{"level":3,"title":"Flatseal 权限管理","slug":"flatseal-权限管理","link":"#flatseal-权限管理","children":[]},{"level":3,"title":"Flatpak安装软件历史版本","slug":"flatpak安装软件历史版本","link":"#flatpak安装软件历史版本","children":[]}]}],"git":{"createdTime":1712065888000,"updatedTime":1712756157000,"contributors":[{"name":"YLRK","email":"ylrk@outlook.com","commits":2}]},"readingTime":{"minutes":1.56,"words":468},"filePathRelative":"docs/tools/Flatpak.md","localizedDate":"2024年4月2日","excerpt":"\\n<h2>介绍</h2>\\n<p><a href=\\"https://zhuanlan.zhihu.com/p/267160794\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">什么是Flatpak？ - 知乎</a></p>\\n<p><a href=\\"https://www.flatpak.org/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Flatpak—the future of application distribution</a></p>\\n<p><a href=\\"https://docs.flatpak.org/en/latest/introduction.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Introduction to Flatpak — Flatpak documentation</a></p>"}');export{P as comp,Z as data};
