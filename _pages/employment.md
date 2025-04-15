---
layout: archive
title: "Employment"
permalink: /employment/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}


| Role              | Years          | Institution                                                                                     | 
|-------------------|----------------|--------------------------------------------------------------------------------------------------|
| **Research Fellow** | 2024 – Present | 🇮🇹 Department of Computer Science, [University of Salerno](https://web.unisa.it/en/university), Italy| 



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
