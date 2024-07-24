---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if site.author.googlescholar  and site.author.dblp%}
  <div class="wordwrap">You can also find my articles on <a href="{{site.author.googlescholar}}">Google Scholar</a> or <a href="{{site.author.dblp}}">DBLP</a> profiles.</div>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
