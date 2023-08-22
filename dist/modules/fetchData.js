export default async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    catch (error) {
        if (error instanceof Error)
            console.error("fetchData: " + error.message);
        return null;
    }
    ;
}
//# sourceMappingURL=fetchData.js.map