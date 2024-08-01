export const switchSections = (selectedSectionIndex = 0, sections = [])=>{
    sections.forEach((section,i)=>{
        if(i == selectedSectionIndex){
            section.style.display = 'block';
        }else{
            section.style.display = 'none';
        }
    })
}