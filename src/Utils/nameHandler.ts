export const getAvatartName = (name: string) => {
    const nameArr = name.split(' ')
    const firstName = nameArr[0]?.toUpperCase() || ['']
    const lastName = nameArr[1]?.toUpperCase() || ['']

    return `${firstName[0]}${lastName[0]}`
}
