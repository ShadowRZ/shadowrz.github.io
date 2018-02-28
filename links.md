# Links

**\*\*INCOMPLETE\*\***
{% for link_hash in site.data.links %}
{% assign link = link_hash[1] %}
## [{{ link.name }}]({{ link.website }})
{{ link.desc }}
{% endfor %}
