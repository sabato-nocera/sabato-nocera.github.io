---
permalink: /
title: "About"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

Sabato Nocera is a **PhD student** in Computer Science and  **Research Fellow** at the [University of Salerno](https://web.unisa.it/en/university), Italy. He received his master's and bachelor's degrees in Computer Science from the same university in September 2022 and 2020, respectively. 

## News

| Date         | Venue | Event       | Description |
|--------------|-------|-----------------|-------|
| Apr. 2025   | [**EASE 2025**](https://conf.researchr.org/home/ease-2025) | Paper accepted   | [**ALOHA: A(IBoM) tooL generatOr for Hugging fAce**](#) |
| Apr. 2025   | [**CauSE 2025**](https://causality-software-engineering.github.io/cause-workshop-2025/) | Paper accepted   | [**Causal Inference Needs More Than Analysis: The Role of Study Design**](#) |
| Mar. 2025   | [**FSE 2025**](https://conf.researchr.org/home/fse-2025) | Paper accepted   | [**Missing Threats: Dealing with the Treatment-sensitive Factorial Structure Bias in Empirical Software Engineering**](#) |
| Jan. 2025 | [**PROFES 2025**](https://conf.researchr.org/home/profes-2025) | Service        | Web Chair |
| Jan. 2025 | [**MSR 2025**](https://2025.msrconf.org/) | Paper accepted   | [**Software Composition Analysis and Supply Chain Security in Apache Projects: an Empirical Study**](https://sabato-nocera.github.io/publications/c11) |
| Dec. 2024| [**JSS**](https://www.sciencedirect.com/journal/journal-of-systems-and-software) | Paper accepted   | [**Software engineering education: Results from a training intervention based on SonarCloud when developing web apps**](https://doi.org/10.1016/j.jss.2024.112308) |
| Sept. 2024| [**WSESE 2025**](https://conf.researchr.org/home/icse-2025/wsese-2025), co-located with [**ICSE 2025**](https://conf.researchr.org/home/icse-2025) | Service | Web Chair |





<style>
  th {
    cursor: pointer;
    position: relative;
    padding-right: 20px; /* space for arrow */
  }

  th::after {
    content: '⇅'; /* initial state */
    position: absolute;
    right: 5px;
    font-size: 0.8em;
    color: #888;
  }

  th.sorted.asc::after {
    content: '↑';
  }

  th.sorted.desc::after {
    content: '↓';
  }
</style>

<script src="https://unpkg.com/tablesort@5.3.0/dist/tablesort.min.js"></script>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll("table").forEach(function(table) {
      const sort = new Tablesort(table);

      table.querySelectorAll("th").forEach(th => {
        th.addEventListener("click", () => {
          table.querySelectorAll("th").forEach(header => header.classList.remove("sorted", "asc", "desc"));
          th.classList.add("sorted");
          if (th.getAttribute("aria-sort") === "ascending") {
            th.classList.add("asc");
          } else if (th.getAttribute("aria-sort") === "descending") {
            th.classList.add("desc");
          }
        });
      });
    });
  });
</script>

