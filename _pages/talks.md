---
layout: archive
title: "Talks"
permalink: /talks/
author_profile: true
---
## Presentations of paper

| Year | Event | Description | Location | Paper Title |
|------|---------|-------|----------|-------------|
| 2024 | [**ESEM**](https://conf.researchr.org/home/esem-2024) | International Symposium on Empirical Software Engineering and Measurement | 🇪🇸 Barcelona, Spain | [MSR4SBOM: Mining Software Repositories for enhanced Software Bills of Materials](https://doi.org/10.1145/3674805.3695390) |
| 2024 | [**ICSE**](https://conf.researchr.org/home/icse-2024) | International Conference on Software Engineering | 🇵🇹 Lisbon, Portugal | [Training for Security: Results from Using a Static Analysis Tool in the Development Pipeline of Web Apps](https://doi.org/10.1145/3639474.3640073) |
| 2023 | [**SEAA**](https://dsd-seaa2023.com/seaa) | Euromicro Conference on Software Engineering and Advanced Applications | 🇦🇱 Durres, Albania | [A Large-scale Fine-grained Empirical Study on Security Concerns in Open-source Software](https://doi.org/10.1109/SEAA60479.2023.00069) and [Managing Vulnerabilities in Software Projects: the Case of NTT Data](https://doi.org/10.1109/SEAA60479.2023.00046) |
| 2023 | [**EASE**](https://conf.researchr.org/home/ease-2023) | International Conference on Evaluation and Assessment in Software Engineering | 🇫🇮 Oulu, Finland | [Training Bachelor Students to Design Better Quality Web Apps: Preliminary Results from a Prospective Empirical Investigation](https://doi.org/10.1145/3593434.3593957) |
| 2023 | [**ICSE**](https://conf.researchr.org/home/icse-2023) | International Conference on Software Engineering | 🇦🇺 Melbourne, Australia | [Training for Security: Planning the Use of a SAT in the Development Pipeline of Web Apps](https://doi.org/10.1109/ICSE-SEET58685.2023.00010) |




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
