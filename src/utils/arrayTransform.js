export default (data) => {
    return data.reduce((prev, current) => {
        const lastIndex = prev.length - 1
        if(prev[lastIndex]?.length < 2){
            prev[lastIndex].push(current)
        } else {
            prev.push([current])
        }
        return prev
    }, [[]])
}