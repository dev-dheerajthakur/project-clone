"use server";
import { getallFriends } from "@/api/friends/get-allFriends";
import { apiType } from "@/api/types/apiTypes";
import SelectMembers from "@/components/team/add/SelectMembers";
import Titles from "@/components/temp/Titles";
import { cookies } from "next/headers";
import React from "react";

const page = async () => {
    const cookieStore = cookies();
    const i_state = cookieStore.get("i_state")?.value;
    
    const json :apiType = await getallFriends({auth: i_state})
  return (
    <div>
      <Titles title="Add members" home={false} />
      <SelectMembers Friends={json.data.friend_details} />
    </div>
  );
};

export default page;
