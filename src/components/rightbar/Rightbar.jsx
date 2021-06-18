import './rightbar.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';

export default function RightBar() {
    return (
        <div className="rightbar">
            <div className="rightWrapper">
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="/assets/gift.png" alt="" />
                    <span className="birthdayText"><b>kale and Teddy</b> Have a birthday today</span>
                </div>
            </div>
            <img className="rightbarAd" src="/assets/posts/po4.jpg" alt="" />
            <h4 className="rightbarTitle">Online Friends</h4>
            <ul className="rightbarFriendsList">
                {Users.map((u) =>
                    <Online key={u.id} user={u}/>
               )}
                
            </ul>
        </div>
    )
}
