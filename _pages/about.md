---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. Suspendisse condimentum, libero vel tempus mattis, risus risus vulputate libero, elementum fermentum mi neque vel nisl. Maecenas facilisis maximus dignissim. Curabitur mattis vulputate dui, tincidunt varius libero luctus eu. Mauris mauris nulla, scelerisque eget massa id, tincidunt congue felis. Sed convallis tempor ipsum rhoncus viverra. Pellentesque nulla orci, accumsan volutpat fringilla vitae, maximus sit amet tortor. Aliquam ultricies odio ut volutpat scelerisque. Donec nisl nisl, porttitor vitae pharetra quis, fringilla sed mi. Fusce pretium dolor ut aliquam consequat. Cras volutpat, tellus accumsan mattis molestie, nisl lacus tempus massa, nec malesuada tortor leo vel quam. Aliquam vel ex consectetur, vehicula leo nec, efficitur eros. Donec convallis non urna quis feugiat.

My research interest includes neural machine translation and computer vision. I have published more than 100 papers at the top international AI conferences with total <a href='https://scholar.google.com/citations?user=hrC7n6QAAAAJ'>google scholar citations <strong><span id='total_cit'>260000+</span></strong></a> (You can also use google scholar badge <a href='https://scholar.google.com/citations?user=hrC7n6QAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>).


# 🔥 News
- *2026.02*: &nbsp;🎉🎉 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2026.02*: &nbsp;🎉🎉 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 

# 📝 Publications 

<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge">CVPR 2026</div>
      <img src='images/CC-CDFSL.png' alt="CC-CDFSL overview" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

[Interpretable Cross-Domain Few-Shot Learning with Rectified Target-Domain Local Alignment](https://arxiv.org/abs/2603.17655)

Yaze Zhao, Yixiong Zou, Yuhua Li, Ruixuan Li

- This work first identifies and addresses the local feature misalignment problem in CDFSL scenarios based on vision-language models (CLIP). To tackle this issue, we propose the CC-CDFSL method, which constructs self-supervised signals via bidirectional feature transformation and introduces the Semantic Anchor mechanism to mitigate noise interference in the visual modality.

</div>
</div>


<div class='paper-box paper-box--afip'><div class='paper-box-image'><div><div class="badge">ICML 2026</div><img src='images/afip.png' alt="AFIP overview" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Correcting Visual Blur Induced by Attention Distraction to Reduce Hallucinations: Algorithm and Theory](https://arxiv.org/abs/2605.24602)

Quanjiang Li<sup>†</sup>, **Zhiming Liu**<sup>†</sup>, Wei Luo, Tingjin Luo, Chenping Hou

- We identify the link between human-like attention distraction and object hallucinations in multimodal models, and propose AFIP, a training-free method that corrects spatial and temporal attention dispersion to enhance visual grounding without additional training.
- <sup>†</sup> indicates equal contribution (co-first authors).
</div>
</div>

<div class='paper-box paper-box--moon'><div class='paper-box-image'><div><div class="badge">ICML 2026</div><img src='images/moon.png' alt="MOON overview" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Von Mises-Fisher Mixture Model with Dynamic Shrinkage for Realistic Test-Time Transduction**

Jiazhen Huang, **Zhiming Liu**, Changhu Wang, Wei Ju, Ziyue Qiao, Xiao Luo

- We identify the brittleness of transductive methods under imbalanced distributions and propose MOON, a training-free, model-agnostic framework that dynamically adjusts shrinkage strength to mitigate negative transfer and enhance VLM performance without retraining.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2026</div><img src='images/talo.png' alt="paper-1" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Do All Individual Layers Help? An Empirical Study of Task-Interfering Layers in Vision-Language Models](https://arxiv.org/abs/2602.01167)

**Zhiming Liu**, Yujie Wei, Lei Feng, Xiu Su, Xiaobo Xia, Weili Guan, Zeke Xie, Shuo Yang

- We identify task-interfering layers in vision-language models and propose a lightweight test-time intervention strategy that improves downstream few-shot reasoning without retraining.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2026</div><img src='images/ttd.png' alt="paper-2" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Test-Time Distillation for Continual Model Adaptation](http://arxiv.org/abs/2506.02671)

Xiao Chen<sup>†</sup>, Jiazhen Huang<sup>†</sup>, **Zhiming Liu**, Qinting Jiang, Fanding Huang, Jingyan Jiang, Zhi Wang

- We propose a collaborative test-time distillation framework for continual model adaptation that improves robustness and generalization under realistic distribution shifts.
- <sup>†</sup> indicates equal contribution (co-first authors).
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Under Review</div><img src='images/adrl.png' alt="paper-1" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Adaptive Disentangled Representation Learning for Incomplete Multi-View Multi-Label Classification](https://arxiv.org/abs/2601.05785)

Quanjiang Li<sup>†</sup>, **Zhiming Liu**<sup>†</sup>, TianxiangXu<sup>†</sup>, Tingjin Luo, Chenping Hou

- We proposed *ADRL*, a novel framework that jointly addresses structural distortion and semantic ambiguity in incomplete multi-view settings by integrating label-guided feature disentanglement and category-aware embedding interaction.
- <sup>†</sup> indicates equal contribution (co-first authors).
</div>
</div>






# 🎖 Honors and Awards
- *2021.10* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.09* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 

# 📖 Educations
- *2019.06 - 2022.04 (now)*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2015.09 - 2019.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 

# 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/)

# 💻 Internships
- *2019.05 - 2020.02*, [Lorem](https://github.com/), China.
