import { StyleSheet } from "react-native"


export const styles = StyleSheet.create({
    headerNav:{
        flex:1
        , alignContent:"center", justifyContent:"space-evenly", flexDirection:"row"
    },
    containerNav: {
        marginTop:-10, paddingHorizontal:0, paddingVertical:0, flex:1, flexDirection:"row", justifyContent:"center"
    },containerIcon:{
        flex:1, flexDirection: 'row', alignItems: 'center', justifyContent:"flex-end", 
    }, ContainerName:{
        width:100, color:"white",
    }
,TextHead:{
    color:"white", fontFamily:"Oswald-Bold"
}

})