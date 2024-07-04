import useWindowResize from "./useWindow_Resize";

const useResponsive=()=>{
    const {width}=useWindowResize();

    const isMobile=width<576;
    const isTablet=width>=576 && width <768;
    const isDesktop=width>=768;

    return {isMobile, isTablet, isDesktop};
};
export default useResponsive;