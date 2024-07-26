---
title: "On the Accuracy of GitHub's Dependency Graph"
collection: publications
permalink: /publication/bifolco_2024_ease
excerpt: 'GitHub, Dependency graph, Empirical study'
date: 2024-06-18
venue: 'Proceedings of the 28th International Conference on Evaluation and Assessment in Software Engineering (EASE)'
slidesurl: # 'http://academicpages.github.io/files/slides1.pdf'
paperurl: 'https://doi.org/10.1145/3661167.3661175'
citation: "Daniele Bifolco, Sabato Nocera, Simone Romano, Massimiliano Di Penta, Rita Francese, and Giuseppe Scanniello. 2024. On the Accuracy of GitHub's Dependency Graph. In Proceedings of the 28th International Conference on Evaluation and Assessment in Software Engineering (EASE '24). Association for Computing Machinery, New York, NY, USA, 242–251. https://doi.org/10.1145/3661167.3661175"
---

**Abstract**: GitHub’s dependency graph shows dependency relationships between repositories. This feature is leveraged by tools such as Dependabot, or GitHub’s feature to export SBOM (Software Bill of Materials) files. Also, it has been used in empirical studies. Inaccuracies in the dependency graph might negatively affect both the effectiveness of tools and the results of the conducted studies. In this paper, we present the results of a mining study to assess the accuracy of GitHub’s dependency graph in Java and Python open-source software projects. In particular, on April 16th, 2023, we randomly sampled 297 software projects developed in Java and 338 developed in Python (all hosted on GitHub), each using GitHub’s dependency graph. Then, we performed three analyses to assess how accurate GitHub’s dependency graph is: (i) backward analysis, focusing on the accuracy of the dependencies of a given repository, as reported in GitHub’s dependency graph; (ii) forward analysis, focusing on the accuracy of the dependents of a given repository, as reported in GitHub’s dependency graph; and (iii) manifest/lock file analysis, focusing on the correspondence between the dependencies reported in the dependency graph of a given repository and what was reported in the corresponding manifest/lock files. The obtained results highlight several inaccuracies in GitHub’s dependency graph, which might affect the output of tools based on GitHub’s dependency graph (e.g., Dependabot and SBOM generators) as well as the outcomes of past empirical studies. We also provide qualitative insights into these inaccuracies and implications for practitioners and researchers.
