---
layout: archive
title: "Teaching"
permalink: /teaching/
author_profile: true
---

## Teaching Experience

| Role              | Years       | Institution                                                                                     | Course |
|-------------------|-------------|--------------------------------------------------------------------------------------------------|--------|
| **Teaching Assistant** | 2021 – 2024 | _Department of Computer Science, [University of Salerno](https://web.unisa.it/en/university), Fisciano SA, Italy_ | [_Web Software Technologies_](https://unisa.coursecatalogue.cineca.it/insegnamenti/2023/511551/2017/9999/500153?coorte=2022&schemaid=17311) |


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

<!--
**Teaching Assistant**<br/>
_2021 - 2024<br/>_
• _Department of Computer Science, [University of Salerno](https://web.unisa.it/en/university), Fisciano SA, Italy_<br/>
• Course: [Web Software Technologies](https://unisa.coursecatalogue.cineca.it/insegnamenti/2023/511551/2017/9999/500153?coorte=2022&schemaid=17311), which is held in the second year of the Computer Science B.Sc. program-->
