import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create ({
    container: {
        flexDirection: "row",
        margin: 10,
        alignItems: "flex-end",
        paddingBottom: 10
    },
    mainContainer: {
        flexDirection: "row",
        padding: 10,
        borderRadius: 25,
        marginRight: 10,
        flex: 1,
        alignItems: "flex-end",
    },
    textInput: {
        flex: 1,
        marginHorizontal: 10,
    },
    icon: {
        marginHorizontal: 5,
    },
    buttonContainer: {
        backgroundColor: Colors["constants"].primary,
        borderRadius: 50,
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },

});

export default styles;