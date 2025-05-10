document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll("table").forEach(function (table) {
        const sort = new Tablesort(table);

        table.querySelectorAll("th").forEach(th => {
            th.addEventListener("click", () => {
                table.querySelectorAll("th").forEach(header =>
                    header.classList.remove("sorted", "asc", "desc")
                );
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
