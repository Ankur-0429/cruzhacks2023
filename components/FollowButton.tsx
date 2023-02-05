import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import follow from "../api/follow";
import Colors from "../constants/Colors";
import useConnection from "../hooks/useConnection";
import { Text } from "./Themed";
import {Button} from 'native-base';

interface FollowButtonProps {
    wantsSlugPoints ?: boolean;
    uid: string;
}

const FollowButton = ({wantsSlugPoints, uid}: FollowButtonProps) => {
    const {requested, dms} = useConnection();
    const [loading, setLoading] = useState(false);
    
    const get_text = () => {
        if (dms.includes(uid)) {
            return "Message"
        }
        if (requested.includes(uid)) {
            return "Requested";
        }
        return wantsSlugPoints ? "Request" : "Share";
    }

    const text = get_text();

    const navigation = useNavigation();

    return (
        <Button isLoading={loading} style={{width: 90, marginLeft: 'auto', borderRadius: 10, opacity: text === "Requested" ? 0.8:1, backgroundColor: '#dcb650'}} onPress={async () => {
            if (text === "Share" || text === "Request") {
                setLoading(true);
                await follow(uid);
                setLoading(false);
            }
            if (text === "Message") {
                navigation.navigate("message", {uid: uid})
            }
        }}>
            <Text style={{fontSize: 12, color: 'white'}}>
                {text}
            </Text>
        </Button>
    )
}

export default FollowButton;