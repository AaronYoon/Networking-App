#include<iostream>
#include<string>
#include<vector>

using namespace std;

/*
-------------------------------------------
Classes
-------------------------------------------
*/

class Community	// Class to store info of each Community
{
public:
	Community(string name) { communityName = name; };
	string communityName;
	void addMember(string newMember) { users.push_back(newMember); }
private:
	vector<string> users;
};

class Connection	// Class to show all related communities with certain user
{
public:
	Connection(string name) { userName = name; }
	string userName;
	vector<string> sharedCommunities;
	void newConnection(Community community) { sharedCommunities.push_back(community.communityName); };
};

class User	// Class to store info of each user
{
public:
	User(string user, string pass);
	void joinCommunity(Community community);
private:
	string username;
	string password;

	vector<Community> interests;
	vector<Connection> relatedUsers;
};

class Network	// Class to contain all content of the application
{
public:
	void addUser(User newUser) { allUsers.push_back(newUser); }
	void addCommunity(Community newCommunity) { allInterests.push_back(newCommunity); };
private:
	vector<User> allUsers;
	vector<Community> allInterests;
};

/*
-------------------------------------------
END OF Classes
-------------------------------------------
*/

int main(void)
{
	Network app;

	User temp1("bob", "123");
	User temp2("bill", "it12");
	User temp3("mark", "fb12");

	app.addUser(temp1);
	app.addUser(temp2);
	app.addUser(temp3);

	Community CPSC362("CPSC362");
	Community CPSC401("CPSC401");

	app.addCommunity(CPSC362);
	app.addCommunity(CPSC401);

	temp1.joinCommunity(CPSC362);
	temp1.joinCommunity(CPSC401);
	temp2.joinCommunity(CPSC401);
	temp3.joinCommunity(CPSC362);

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

void User::joinCommunity(Community community)
{
	interests.push_back(community);
	cout << username << " has joined " << community.communityName << "!" << endl;
	community.addMember(username);
}