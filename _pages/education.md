---
layout: archive
title: "Education"
permalink: /education/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}


## Education

| Degree                                  | Years         | Institution                                                                                     | Final Grade | Advisors |
|-----------------------------------------|---------------|--------------------------------------------------------------------------------------------------|-------| -------|
| **Doctor of Philosophy (Ph.D.) in Computer Science** | 2022 – Present | 🇮🇹 Department of Computer Science, [University of Salerno](https://web.unisa.it/en/university), Italy | - | [Prof. Rita Francese](https://docenti.unisa.it/004763/home) and [Prof. Simone Romano](https://sites.google.com/view/simoneromano/home?authuser=0) |
| **Master’s Degree (M.Sc.) in Computer Science**     | 2020 – 2022   | 🇮🇹 Department of Computer Science, [University of Salerno](https://web.unisa.it/en/university), Italy | 110/110 cum laude and commendation by the commission | [Prof. Rita Francese](https://docenti.unisa.it/004763/home), [Prof. Simone Romano](https://sites.google.com/view/simoneromano/home?authuser=0) and [Prof. Giuseppe Scanniello](https://sites.google.com/view/prof-giuseppe-scanniello/home) |
| **Bachelor’s Degree (B.Sc.) in Computer Science**   | 2017 – 2020   | 🇮🇹 Department of Computer Science, [University of Salerno](https://web.unisa.it/en/university), Italy | 110/110 cum laude | [Prof. Michele Risi](https://docenti.unisa.it/005637/home) |






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
