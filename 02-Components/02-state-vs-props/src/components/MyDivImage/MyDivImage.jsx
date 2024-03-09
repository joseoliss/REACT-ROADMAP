
export default function MyDivImage({imageUrl, width = 'small'}){
    const styleBig = {width:'1000px',transition: '0.5s'}
    const styleSmall = {width:'500px',transition: '0.5s'}

    if(width == 'small'){
        return <img style={styleSmall} src={imageUrl} alt="image" />
    }
    return <img style={styleBig} src={imageUrl} alt="image" />
}