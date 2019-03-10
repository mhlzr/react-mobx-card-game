export const fetchPlayerData = async () => {
    const response = await fetch(
        '../static/data/players.json',
    );
    const json = await response.json();
    console.log(json);
    return json;
}
