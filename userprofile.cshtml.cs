using System;
using System.Windows;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Google.Cloud.Firestore;


namespace CPSC361_ClassProject.Pages
{
    public class userprofileModel : PageModel
    {
        public object userLabel { get; set; }
        public object aboutUser { get; set; }

        public object addFriendLabel { get; set; }
        public object blockLabel { get; set; }
        public string message { get; set; }

        public async Task OnGetAsync()
        {

            FirestoreDb db = FirestoreDb.Create("networking-application");
            Console.WriteLine("Created Cloud Firestore client with project ID: {0}", "networking-application");

            // User 1 data
            DocumentReference userRef = db.Collection("Users").Document("user1");
            DocumentSnapshot snapshot = await userRef.GetSnapshotAsync();

            // User 2 data
            DocumentReference user2Ref = db.Collection("Users").Document("user2");
            DocumentSnapshot snapshot2 = await user2Ref.GetSnapshotAsync();

            blockLabel = "Block!";
            addFriendLabel = "Add!";

            // Creating User 1's user page
            if (snapshot.Exists)
            {
                Dictionary<string, object> userInfo = snapshot.ToDictionary();

                userLabel = userInfo.FirstOrDefault(x => x.Key == "userName").Value;
                aboutUser = userInfo.FirstOrDefault(x => x.Key == "userDescription").Value;

            }
            else
            {
                System.Diagnostics.Debug.WriteLine("Document {0} does not exist!", snapshot.Id);
            }
        }

        // User 2 blocking User 1
        public async Task blockUser()
        {
            FirestoreDb db = FirestoreDb.Create("networking-application");
            Console.WriteLine("Created Cloud Firestore client with project ID: {0}", "networking-application");

            DocumentReference user1Ref = db.Collection("Users").Document("user1");
            DocumentSnapshot snapshot = await user1Ref.GetSnapshotAsync();
            Dictionary<string, object> user1Info = snapshot.ToDictionary();

            object userToBlock = user1Info.FirstOrDefault(x => x.Key == "userName").Value;
            DocumentReference user2Ref = db.Collection("Users").Document("user2").Collection("Blocked").Document(userToBlock.ToString());

            Dictionary<string, object> newBlock = new Dictionary<string, object>
            {
                {"TimeOfBlock", Timestamp.GetCurrentTimestamp() },
                {"UserID", "1234" }
            };

            await user2Ref.SetAsync(newBlock);
        }

        // Users 1 and 2 adding each other
        public async Task addUser()
        {
            FirestoreDb db = FirestoreDb.Create("networking-application");
            Console.WriteLine("Created Cloud Firestore client with project ID: {0}", "networking-application");

            // Adding User 1 to User 2's friend list
            DocumentReference user1Ref = db.Collection("Users").Document("user1");
            DocumentSnapshot snapshot = await user1Ref.GetSnapshotAsync();
            Dictionary<string, object> user1Info = snapshot.ToDictionary();
            object addingUser1 = user1Info.FirstOrDefault(x => x.Key == "userName").Value;

            DocumentReference doc2Ref = db.Collection("Users").Document("user2").Collection("Friends").Document(addingUser1.ToString());

            Dictionary<string, object> newUser2Friend = new Dictionary<string, object>
            {
                {"TimeofAdd", Timestamp.GetCurrentTimestamp()}
            };

            await doc2Ref.SetAsync(newUser2Friend);

            // Adding User 2 to User 1's friend list
            FirestoreDb bake = FirestoreDb.Create("networking-application");
            DocumentReference user2Ref = bake.Collection("Users").Document("user2");
            DocumentSnapshot snapshot2 = await user2Ref.GetSnapshotAsync();
            Dictionary<string, object> user2Info = snapshot2.ToDictionary();

            object addingUser2 = user2Info.FirstOrDefault(x => x.Key == "userName").Value;

            DocumentReference docRef = bake.Collection("Users").Document("user1").Collection("Friends").Document(addingUser2.ToString());
            Dictionary<string, object> newUser1Friend = new Dictionary<string, object>
            {
                {"TimeOfAdd", Timestamp.GetCurrentTimestamp()}
            };

            await docRef.SetAsync(newUser1Friend);
        }

        // User 2 sending a message to user 1
        public async Task OnPostAsync()
        {

            message = Request.Form["messageBox"];

            FirestoreDb db = FirestoreDb.Create("networking-application");
            Console.WriteLine("Created Cloud Firestore client with project ID: {0}", "networking-application");
            DocumentReference user1Ref = db.Collection("Users").Document("user1");
            DocumentSnapshot snapshot = await user1Ref.GetSnapshotAsync();
            Dictionary<string, object> user1Info = snapshot.ToDictionary();
            DocumentReference user2Ref = db.Collection("Users").Document("user2");
            DocumentSnapshot snapshot2 = await user2Ref.GetSnapshotAsync();
            Dictionary<string, object> user2Info = snapshot2.ToDictionary();

            FirestoreDb bake = FirestoreDb.Create("networking-application");
            DocumentReference docRef = bake.Collection("Users").Document("user1").Collection("Messages").Document();

            Dictionary<string, object> newMessage = new Dictionary<string, object>
            {
                { "SendTime", Timestamp.GetCurrentTimestamp()},
                { "MessageBody", message},
                { "Sender", user2Info.FirstOrDefault(x => x.Key == "userName").Value},
                { "Reciever", user1Info.FirstOrDefault(x => x.Key == "userName").Value}
            };

            await docRef.SetAsync(newMessage);
            await OnGetAsync();
        }
    }
}


