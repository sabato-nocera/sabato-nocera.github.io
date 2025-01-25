---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Publications</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 20px;
    }
    .publication {
      margin-bottom: 20px;
    }
    .snippet {
      display: none;
      background-color: #f9f9f9;
      border: 1px solid #ddd;
      padding: 10px;
      margin-top: 10px;
      font-family: "Courier New", monospace;
    }
    .toggle-btn {
      background-color: #007bff;
      color: white;
      border: none;
      padding: 5px 10px;
      cursor: pointer;
      border-radius: 5px;
    }
    .toggle-btn:hover {
      background-color: #0056b3;
    }
  </style>
</head>
<body>
  <h1>Publications</h1>
  <div class="publication">
    <p>[C2] <strong>Nocera, S.</strong>, Francese, R., & Scanniello, G. (2023, June). <a href="https://doi.org/10.1145/3593434.3593957" target="_blank">Training Bachelor Students to Design Better Quality Web Apps: Preliminary Results from a Prospective Empirical Investigation</a>. In <em>Proceedings of the 27th International Conference on Evaluation and Assessment in Software Engineering (EASE)</em> (pp. 465-469). ACM.</p>
    <button class="toggle-btn" onclick="toggleSnippet('snippet1')">Show BibTeX</button>
    <div id="snippet1" class="snippet">
      @inproceedings{Nocera:Ease:2023,<br>
      &nbsp;&nbsp;author = {Nocera, Sabato and Francese, Rita and Scanniello, Giuseppe},<br>
      &nbsp;&nbsp;title = {Training Bachelor Students to Design Better Quality Web Apps: Preliminary Results from a Prospective Empirical Investigation},<br>
      &nbsp;&nbsp;year = {2023},<br>
      &nbsp;&nbsp;publisher = {Association for Computing Machinery},<br>
      &nbsp;&nbsp;address = {New York, NY, USA},<br>
      &nbsp;&nbsp;url = {https://doi.org/10.1145/3593434.3593957},<br>
      &nbsp;&nbsp;doi = {10.1145/3593434.3593957},<br>
      &nbsp;&nbsp;booktitle = {Proceedings of the 27th International Conference on Evaluation and Assessment in Software Engineering},<br>
      &nbsp;&nbsp;pages = {465–469},<br>
      &nbsp;&nbsp;location = {Oulu, Finland},<br>
      &nbsp;&nbsp;series = {EASE '23}}<br>
    </div>
  </div>

  <div class="publication">
    <p>[C1] <strong>Nocera, S.</strong>, Romano, S., Francese, R., & Scanniello, G. (2023, May). <a href="https://doi.org/10.1109/ICSE-SEET58685.2023.00010" target="_blank">Training for security: planning the use of a SAT in the development pipeline of web Apps</a>. In <em>2023 IEEE/ACM 45th International Conference on Software Engineering: Software Engineering Education and Training (ICSE-SEET)</em> (pp. 40-45). IEEE.</p>
    <button class="toggle-btn" onclick="toggleSnippet('snippet2')">Show BibTeX</button>
    <div id="snippet2" class="snippet">
      @inproceedings{Nocera:IcseSeet:2023,<br>
      &nbsp;&nbsp;author={Nocera, Sabato and Romano, Simone and Francese, Rita and Scanniello, Giuseppe},<br>
      &nbsp;&nbsp;booktitle={2023 IEEE/ACM 45th International Conference on Software Engineering: Software Engineering Education and Training (ICSE-SEET)},<br>
      &nbsp;&nbsp;title={Training for Security: Planning the Use of a SAT in the Development Pipeline of Web Apps},<br>
      &nbsp;&nbsp;year={2023},<br>
      &nbsp;&nbsp;pages={40-45},<br>
      &nbsp;&nbsp;url = {https://doi.org/10.1109/ICSE-SEET58685.2023.00010},<br>
      &nbsp;&nbsp;doi={10.1109/ICSE-SEET58685.2023.00010}}<br>
    </div>
  </div>

  <script>
    function toggleSnippet(id) {
      const snippet = document.getElementById(id);
      if (snippet.style.display === "none" || snippet.style.display === "") {
        snippet.style.display = "block";
      } else {
        snippet.style.display = "none";
      }
    }
  </script>
</body>
</html>
