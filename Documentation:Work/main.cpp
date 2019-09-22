#include<iostream>
#include<string>

using namespace std;

/*
-------------------------------------------
Classes
-------------------------------------------
*/
class Connections
{
public:

private:
	string userName;
	string connectedBy[100]; // array of communities you share with this user
};

class User
{
public:
	User(string user, string pass);
	void joinCommunity(string communityName);
private:
	string username;
	string password;
	string interests[10];
	Connections relatedUsers[10];
};

/*
-------------------------------------------
END OF Classes
-------------------------------------------
*/

int main(void)
{
	User temp1("bob", "123");
	User temp2("bill", "it12");
	User temp3("mark", "fb12");

	temp1.joinCommunity("cpsc362");
	temp2.joinCommunity("cpsc362");
	temp3.joinCommunity("cpsc362");


	return 0;
}

/*
-------------------------------------------
Functions
-------------------------------------------
*/

User::User(string user, string pass)
{
	username = user;
	password = pass;
}

void User::joinCommunity(string communityName)
{
	for (int i = 0; i < 10; i++)
	{
		if (interests[i] == "\0")
		{
			interests[i] = communityName;
			cout << username << " has joined the " << interests[i] << " community!" << endl;
			break;
		}
		else
			continue;
	}
}