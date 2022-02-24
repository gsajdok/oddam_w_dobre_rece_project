import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";

export const PageContentContext = React.createContext({
        language: "polish",
        strings: {},
        updateLanguage: () => {},
    });

export const PageContentProvider = ({children, fetchLanguage}) => {
    const [{language, strings}, setLanguage] = useState({
        language: "polish",
        strings: {}
    })
    const initialStringsLoaded = useRef(false);

    const updateLanguage = useCallback(
        async (newLang) => {
            if(initialStringsLoaded.current && newLang === language) return
            const newStrings = await fetchLanguage({language: newLang})
            initialStringsLoaded.current = true;
            setLanguage({
                language: newLang,
                strings: newStrings
            })
        }, [language, fetchLanguage]
    )

    useEffect(() => {
        updateLanguage(language)
    }, [language, updateLanguage])

    const context = {
        language,
        strings,updateLanguage: updateLanguage
    }

    return (
        <PageContentContext.Provider value={{context, updateLanguage}}>
            {children}
        </PageContentContext.Provider>
    )
}
