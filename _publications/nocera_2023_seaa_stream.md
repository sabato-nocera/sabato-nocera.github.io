---
title: "A Large-scale Fine-grained Empirical Study on Security Concerns in Open-source Software"
collection: publications
permalink: /publication/nocera_2023_seaa_stream
excerpt: 'A study of 164,980 commits from 200 open-source Python projects revealed that security concerns are widely spread and tend to survive over time, highlighting the need for developers to enhance their security practices.'
date: 2023-09-06
venue: 'Proceedings of the 49th Euromicro Conference on Software Engineering and Advanced Applications (SEAA)'
slidesurl: # 'http://academicpages.github.io/files/slides1.pdf'
paperurl: 'https://doi.org/10.1109/SEAA60479.2023.00069'
citation: 'S. Nocera, S. Romano, R. Francese and G. Scanniello, "A Large-scale Fine-grained Empirical Study on Security Concerns in Open-source Software," 2023 49th Euromicro Conference on Software Engineering and Advanced Applications (SEAA), Durres, Albania, 2023, pp. 418-425, doi: 10.1109/SEAA60479.2023.00069.'
---

**Abstract**: We conducted a large-scale fine-grained empirical study in which we quantitatively analyzed the commit histories of 200 Open-Source (OS) Python software systems, whose software repositories were publicly available on GitHub, for a total of 164,980 commits analyzed. We focused on commits—this is why our study is considered fine-grained—to investigate the spread and evolution of security concerns. To detect security concerns at a commit level, we used SonarQube, a popular Static Application Security Testing (SAST) tool. We found, among other things, that: security concerns are spread in OS Python software systems (on average, about 11 security concerns per commit) and tend to survive more than a couple of weeks and a dozen commits; and critical security concerns, despite their high severity level, are the most spread and tend to survive the most. Also, we found that 47 different kinds of security concerns were introduced into the source code of the studied software systems, and the top eight (per number of introductions) are severe and account for 87% of all introduced security concerns. Python developers should pay more attention to security concerns, especially those critical, and use secure coding practices, automated tools, or even DevSecOps to avoid the introduction of security concerns into their source code or fix them as soon as possible.
