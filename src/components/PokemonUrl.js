const PokemonUrl=({curOffset,curLimit,onPrevChange,onNextChange})=>{
    const handleClickPrev=function(){
        if(curOffset===0){
            alert("Error, You are on the first 20 pokemon")
        }else{
            const newOffset=curOffset-20
            // const newLimit=curLimit-20
            onPrevChange(newOffset)
        }
    }
    const handleClickNext=function(){
        if(curOffset===1200){
            alert("Error, You are on the last 20 pokemon")
        }else{
            const newOffset=curOffset+20
            // const newLimit=curLimit+20
            // console.log("limit", newLimit,"current: ",curLimit)
            onNextChange(newOffset)
        }
    }
    return(
        <div id="change-page">
            <button id="previous-20" onClick={handleClickPrev}> View Previous 20</button>
            <button id="next-20" onClick={handleClickNext}> View Next 20</button>
        </div>
    )
}
export default PokemonUrl