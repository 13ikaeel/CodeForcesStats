

type UserDetails = {
  handle: string;
  country: string;
  city: string;
  rank: string;
  rating: number;
  maxRank: string;
  maxRating: number;
  lastOnlineTimeSeconds: number;
  registrationTimeSeconds: number;
};

type UserInfoProps = {
  data: UserDetails | null;
  showUser: boolean;
	setShowUser: React.Dispatch<React.SetStateAction<boolean>>;
	setHandle: React.Dispatch<React.SetStateAction<string>>;
	handle: string;
};

const UserInfo = (props: UserInfoProps) => {
  if (!props.data) return null;

  const {
    handle,
    country,
    city,
    rank,
    rating,
    maxRank,
    maxRating,
    lastOnlineTimeSeconds,
    registrationTimeSeconds,
  } = props.data;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black backdrop-blur-sm bg-opacity-50">
      <div className="relative bg-pri rounded-lg p-10 shadow-lg grid gap-6 md:grid-cols-2">
        <i
          onClick={()=>{
						props.setShowUser(false)
						props.setHandle('')
						}
					}
          className="fa-solid fa-xmark absolute top-2 right-2 cursor-pointer fill-current text-bg-pri text-3xl py-1 px-3 shadow-inner rounded-full"
        ></i>

        <div>
          <div className="grid grid-cols-2 gap-x-0 gap-y-1">
            <div className="font-semibold">Handle:</div>
            <div>{handle}</div>
            <div className="font-semibold">Country:</div>
            <div>{country}</div>
            <div className="font-semibold">City:</div>
            <div>{city}</div>
            <div className="font-semibold">Rank:</div>
            <div>{rank}</div>
            <div className="font-semibold">Rating:</div>
            <div>{rating}</div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-y-2">
            <div className="font-semibold">Max Rank:</div>
            <div>{maxRank}</div>
            <div className="font-semibold">Max Rating:</div>
            <div>{maxRating}</div>
            <div className="font-semibold">Last Online Time:</div>
            <div>{new Date(lastOnlineTimeSeconds * 1000).toLocaleString()}</div>
            <div className="font-semibold">Registration Time:</div>
            <div>{new Date(registrationTimeSeconds * 1000).toLocaleString()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
