using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Google.Cloud.Firestore;

namespace CPSC361_ClassProject.Pages
{
    public class forumModel : PageModel
    {
        public object userLabel { get; set; }
        public object aboutUser { get; set; }
        public int numPosts { get; set; }

        public List<string> forumTitles = new List<string>();

        public List<string> forumTexts = new List<string>();




        public async Task OnPostAsync()
        {
            FirestoreDb db = FirestoreDb.Create("networking-application");

            DocumentReference userRef = db.Collection("Post").Document("UserPosts");
            DocumentSnapshot snapshot = await userRef.GetSnapshotAsync();
            if (snapshot.Exists)
            {
                Dictionary<string, object> userInfo = snapshot.ToDictionary();

                userLabel = userInfo.FirstOrDefault(x => x.Key == "userLabel").Value;
                aboutUser = userInfo.FirstOrDefault(x => x.Key == "aboutUser").Value;

                //for(int i = 1; i <= 6; i++)
                int index = 0;
                while (userInfo.ContainsKey("title" + index))
                {
                    forumTitles.Add(userInfo.FirstOrDefault(x => x.Key == "title" + index).Value.ToString());
                    forumTexts.Add(userInfo.FirstOrDefault(x => x.Key == "forumtext" + index).Value.ToString());
                    numPosts = index+1;
                    index++;
                    

                }


            }
            else
            {
                System.Diagnostics.Debug.WriteLine("Document {0} does not exist!", snapshot.Id);
            }


        }
    }
}