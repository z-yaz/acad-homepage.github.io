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

Hi, There👋! I am a student at Huazhong University of Science and Technology(HUST). 

I am currently diving into **Few-shot Learning** and **Visual Language Model**, aiming to help build more intelligent systems.

**Feel free to reach me via email or WeChat: ABC-4941**

# 🔥 News
- *2026.03*: &nbsp;🎉🎉  We win the **2nd Place** in the NTIRE 2026 CD-FSOD Challenge, CVPR 2026.
- *2026.02*: &nbsp;🎉🎉 One paper "Interpretable CDSFSL with Rectified Target-Domain Local Alignment", was accepted by **CVPR 2026**.


# 📝 Publications 

<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge">Under Review</div>
      <img src='images/Semantic_Probe.png' alt="Semantic Probe" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

[**Reviving In-domain Fine-tuning Methods for Source-Free Cross-domain Few-shot Learning**](http://arxiv.org/abs/2605.11659)

**Yaze Zhao**<sup>†</sup>, Yicong Liu<sup>†</sup>, Yixiong Zou, Yuhua Li, Ruixuan Li

- By establishing fine-tuning baselines of CLIP for CDFSL, we find adapter-based methods consistently outperform prompt-based ones—contrary to in-domain scenarios. We analyze this phenomenon and discover LoRA’s superiority stems from rectifying the collapsed attention of visual [CLS] token, enhancing modality alignment and class separation by focusing on text-related visual regions. Further, we find textual [EOS] token exhibit much better attention to visual samples, and CLIP’s standard contrastive loss weakly constrains modality alignment. 
- Based on these insights, we propose a plug-and-play Semantic Probe framework consisting of an EAR module and a dynamic BAS loss, which revives in-domain fine-tuning methods and achieves SOTA performance on four CDFSL benchmarks. 
- <sup>†</sup> indicates equal contribution (co-first authors).
</div>
</div>



<div class="paper-box paper-box--moon">
  <div class="paper-box-image">
    <div>
      <div class="badge">CVPR 2026 Workshop</div>
      <img src="images/GiPL.png" alt="GiPL overview" width="100%">
    </div>
  </div>
  <div class="paper-box-text" markdown="1">

[**GiPL: Generative augmented iterative Pseudo-Labeling for Cross-Domain Few-Shot Object Detection**](http://arxiv.org/abs/2605.29539) 

Jiacong Liu, Shu Luo, Yikai Qin, **Yaze Zhao**, Yongwei Jiang, Yixiong Zou

- We propose GiPL, an efficient two-branch training framework for CDFSOD. In the first branch, we design an iterative pseudo-label self-training paradigm, which performs zero-shot inference on the support set to generate reliable pseudo-annotations, fuses them with ground-truth labels, and iteratively optimizes the model. In the second branch, we introduce generative data augmentation pipeline using large vision-language models, which synthesizes domain-aligned, multi-object annotated images.  
</div> <!-- 不可以空格    -->
</div>



<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge">CVPR 2026 Workshop</div>
      <img src='images/NTIRE_2026_CDFSOD.png' alt="NTIRE_2026_CDFSOD" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

[**The Second Challenge on Cross-Domain Few-Shot Object Detection at NTIRE 2026: Methods and Results**](http://arxiv.org/abs/2604.11998)

**CDiscover team** from HUST

- As part of NTIRE 2026, we hosted the second CD-FSOD Challenge to systematically evaluate and promote progress in detecting objects in unseen target domains under limited annotation conditions. The challenge received strong community interest, with 128 registered participants and a total of 696 submissions. Participants explored a wide range of strategies, introducing innovative methods that push the performance frontier under both open-source and closed-source tracks. This report presents a detailed overview of the NTIRE 2026 CD-FSOD Challenge, including a summary of the submitted approaches and an analysis of the final results across all participating teams.
</div>
</div>


<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge">CVPR 2026</div>
      <img src='images/CC-CDFSL.png' alt="CC-CDFSL overview" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

[**Interpretable Cross-Domain Few-Shot Learning with Rectified Target-Domain Local Alignment**](https://arxiv.org/abs/2603.17655)

**Yaze Zhao**, Yixiong Zou, Yuhua Li, Ruixuan Li

- This work first identifies and addresses the local feature misalignment problem in CDFSL scenarios based on vision-language models (CLIP). To tackle this issue, we propose the CC-CDFSL method, which constructs self-supervised signals via bidirectional feature transformation and introduces the Semantic Anchor mechanism to mitigate noise interference in the visual modality.
</div>
</div>





# 🎖 Honors and Awards

### 🏆 Competitions
- *2026.03*&nbsp; CVPR Workshop NTIRE-CDFSOD Challenge (Cross‑Domain Few‑Shot Object Detection) – Global Second Place
- *2025.05*&nbsp; Chinese Collegiate Computing Competition (4C), Central South Regional Third Prize
- *2024.08*&nbsp; RAICOM Robot Developer Competition, National First Prize
- *2024.06*&nbsp; Blue Bridge Cup National Software and Information Technology Talent Competition, National Second Prize
- *2024.06*&nbsp; China College Students’ Service Outsourcing Innovation and Entrepreneurship Competition, National Second Prize
- *2024.05*&nbsp; Mathematical Contest in Modeling (MCM), Honorable Mention (H Award)
- *2024.04*&nbsp; Huawei ICT Competition (Ascend AI Track), National Third Prize

### 🎓 Honors & Scholarships
- *2025.10*&nbsp; First‑Class Master’s Academic Scholarship, HUST
- *2025.06*&nbsp; HUST Outstanding Graduate
- *2025.05*&nbsp; HUST Outstanding Communist Youth League Member
- *2024.12*&nbsp; HUST Merit Student
- *2024.03*&nbsp; Sangfor Scholarship
- *2023.12*&nbsp; Academic Excellence Scholarship, HUST
- *2023.07*&nbsp; Outstanding Individual in the “Three Rural” Summer Social Practice, HUST
- *2022.03*&nbsp; Social Welfare Scholarship, HUST


# 📖 Educations
- *2025.09 - now*,&nbsp; 华中科技大学，计算机科学与技术专业，硕士
- *2021.09 - 2025.06*,&nbsp; 华中科技大学，数据科学与大数据专业，本科

# 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/)

# 💻 Internships
- *2019.05 - 2020.02*, [Lorem](https://github.com/), China.
