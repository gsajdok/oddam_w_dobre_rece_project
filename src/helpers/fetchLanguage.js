export const fetchLanguage = ({ language = "polish"}) =>
    import("../mockup_data/pagecontent").then((content) => {
        return content.pageContent[language]
    })