import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { currentUser } from "../constants/Atoms";
import { getFirestore, doc, getDoc, onSnapshot } from "firebase/firestore";

export default function useConnection() {
  const firestore = getFirestore();
  const [currUser] = useAtom(currentUser);

  let followingRef: any, followerRef: any, requestRef: any;
  if (currUser) {
    followerRef = doc(firestore, "followers", currUser!.uid);
    followingRef = doc(firestore, "following", currUser!.uid);
    requestRef = doc(firestore, "follower_request", currUser!.uid);
  }
  const [followers, setFollowers] = useState([] as string[]);
  const [following, setFollowing] = useState([] as string[]);
  const [request, setRequests] = useState([] as string[]);

  // const call = async () => {
  //   const followingDoc = await getDoc(followingRef) as any;
  //   const followersDoc = await getDoc(followerRef) as any;
  //   const requestDoc = await getDoc(requestRef) as any;
  
  //   setFollowing(followingDoc.data()?.following || []);
  //   setFollowers(followersDoc.data()?.followers || []);
  //   setRequests(requestDoc.data()?.["follower_request"] || []);
  // }

  // useEffect(() => {
  //   call();
  // }, [])



  useEffect(() => {
    const unsubscribe = onSnapshot(followerRef, (snapshot: any) => {
      setFollowers(snapshot.data()?.followers || []);
    });
    console.log('follower');
    return unsubscribe;
  }, []);

  useEffect(() => {
    const unsubscribe = onSnapshot(followingRef, (snapshot: any) => {
      setFollowing(snapshot.data()?.following || []);
      console.log('following')
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const unsubscribe = onSnapshot(requestRef, (snapshot: any) => {
      setRequests(snapshot.data()?.["follower_request"] || []);
      console.log('requests')
    });
    return unsubscribe;
  }, []);

  const dms = followers.filter((e) => {return following.includes(e)});
  const requested = following.filter((e) => {return !followers.includes(e)})

  return {dms, request, requested};
}
