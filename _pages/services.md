---
layout: archive
title: "Services"
permalink: /services/
author_profile: true
---

## Conference Services

| Role               | Year | Event | Description | Location |
|--------------------|------|---------|--------|----------|
| **Web Chair**      | 2025 | [**PROFES**](https://conf.researchr.org/home/profes-2025) | International Conference on Product-Focused Software Process Improvement | 🇮🇹 Salerno, Italy |
| **Web Chair**      | 2025 | [**WSESE**](https://conf.researchr.org/home/icse-2025/wsese-2025) | International Workshop on Methodological Issues with Empirical Studies in Software Engineering | 🇨🇦 Ottawa, Ontario, Canada |
| **Student Volunteer** | 2024 | [**ICSE**](https://conf.researchr.org/home/icse-2024) | International Conference on Software Engineering | 🇵🇹 Lisbon, Portugal |

## Journal Services

| Role     | Years          | Journal | Description |
|----------|----------------|---------|---------|
| **Reviewer** | 2023 – Present | [**TOSEM**](https://dl.acm.org/journal/tosem) | ACM Transactions on Software Engineering and Methodology |


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

