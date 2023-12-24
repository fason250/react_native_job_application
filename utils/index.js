export const checkCompanyLogo = (url)=>{
    if(!url) return false
    else{
        const imagePattern = new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$','i')
        return imagePattern.test(url)
    }
}