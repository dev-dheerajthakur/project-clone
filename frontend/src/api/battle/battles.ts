import axios from "axios";

const domain = process.env.server_domain;

const fetchAllBattles = async () => {  
  try {
    const json = await axios({
      method: "GET",
      url: `${domain}/battle/get/all`
    });
    return json.data;
  } catch (err:any) {
    return err.response.data
  }
};

const fetchSingleBattle = async (_id: string)=>{
  try {
    const json = await axios({
      method: "GET",
      url: `${domain}/battle/get/${_id}`
    });
    return json.data;
  } catch (err: any) {
    return err.response.data
  }
};

const joinBattle = async ({battle, team, members, Authorization}: {
  battle: string,
  team: string,
  members: string[],
  Authorization: string
}) => {
  try {
    const json = await axios({
      method: "POST",
      url: `${domain}/battle/join`,
      data: {
        battle, team, members
      },
      headers: {
        Authorization
      }
    });
    return json.data;
  } catch (err: any) {
    return err.response.data
  }
};

const fetchUpcomingBattles = async ( authorization: string | undefined ) => { 
  try {
    const json = await axios({
      method: "GET",
      url: `${domain}/battle/get/upcoming`,
      headers: {
        Authorization: authorization
      }
    });
    return json.data;
  } catch (err:any) {
    return err.response.data
  }
}

export { fetchAllBattles, fetchSingleBattle, joinBattle, fetchUpcomingBattles }