export interface NavbarItemType {
    label : string,
    href : string
}


export const NavbarArray:Array<NavbarItemType> = [
    {
        label : "All Products",
        href : '/products'
    },
    {
        label : "Home",
        href : "/"
    },
    {
        label : "Shop",
        href : "/shop"
    },
    {
        label : "Blog",
        href : "/blog"
    },
    {
        label : "Featured",
        href : "/featured"
    }
]