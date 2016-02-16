---
layout: post
title:  "Can I Install WordPress on my Own Computer??"
date:   2015-08-19
categories: dev-bootcamp risk-taking tech
twitter_text: "Whether you're working with a developer or editing a WordPress site yourself, FTP access will make it much easier."
---
![Can I Install WordPres on my Own Computer?](/images/I-wonder...-2-1024x512.png)

I had lunch with my friend Emily this week. We sat down over Garrison Keilor sandwiches (at Ipsento in Wicker Park, where they name their sandwiches after famous writers) and swapped advice about WordPress and social media. Emily is a journalist who wants to migrate her content from Blogger to a more professional-looking WordPress site.

##One of the questions she had was: “Can I edit my WordPress site on my own computer before launching it?”

Of course the answer is yes!  By doing this, you're able to perfect your theme and avoid the dreaded 'Coming Soon' page on your existing site while you work.  Here's my friendly, illustrated guide to setting up WordPress locally. (Note: These instructions are for a Mac, and the process might be a little different for Windows.  I have included a link at the bottom which should help my friends who use Windows.)

###1. Download and install MAMP.
MAMP is a program that allows you to host your WordPress files *locally* (on your own computer) and communicate with a database which stores posts, pages, and files.  You can download MAMP [here](http://www.mamp.info).  Once the program downloads, go through the installation process.  You don't need MAMP PRO—the unpaid version should work just fine for us.

![MAMP](/images/wordpress-install/Screen-Shot-2015-08-18-at-3.31.32-PM1-1024x606.png)

###2.  Create a new folder in your home directory.
While MAMP is downloading, you can open up your Finder (located in the bottom-left corner of your screen).  Find your *home directory* (mine is called 'Becca'), and create a new folder.  My folder is called 'sites', but you can call yours whatever you want.  For easy access, drag this folder to the 'favorites' bar on the left.

![Sites Directory](/images/wordpress-install/Screen-Shot-2015-08-18-at-3.49.45-PM.png)

###3.  Download WordPress.
Go to [wordpress.org](http://www.wordpress.org) and download the latest version of WordPress.  Put the .zip file inside the folder you created in step 2.

![WordPress Download](/images/wordpress-install/Screen-Shot-2015-08-18-at-4.01.46-PM-1024x610.png)

###4.  Un-zip and rename your WordPress folder.
Once WordPress has finished downloading, un-zip the folder and rename it with the name of your site.

![Unzip WordPress](/images/wordpress-install/Screen-Shot-2015-08-18-at-4.10.17-PM.png)

###5.   Edit your MAMP preferences.
Launch MAMP (if it's not still open from the installation) and click 'Preferences'.

![MAMP Preferences](/images/wordpress-install/Screen-Shot-2015-08-18-at-4.28.40-PM.png)

**Start/Stop:** Uncheck 'Check for MAMP PRO'.

![MAMP Pro](/images/wordpress-install/Screen-Shot-2015-08-18-at-4.20.41-PM.png)

**Ports:** The default ports should work—no need to change them.  If you have a problem using these ports, there's some great troubleshooting advice in the other articles I've included in this post.

![Default Ports](/images/wordpress-install/Screen-Shot-2015-08-18-at-4.20.47-PM.png)

**Web Server:** Click the folder icon next to 'Document Root'.  Navigate to the original folder you created in step 2, and click 'Select'.

![Document Root](/images/wordpress-install/Screen-Shot-2015-08-18-at-4.21.02-PM.png)

###6.  Create a database.
Click 'Open WebStart page' in MAMP,  then click phpMyAdmin.

![phpMyAdmin](/images/wordpress-install/Screen-Shot-2015-08-18-at-8.12.19-PM-1024x610.png)

Click 'new' at the top of the list of databases on the left.  (I have more databases from other projects I have worked on, but you should only see one or two.  Name your database, and select utf8_bin.  At this step, Emily accidentally set up her database in Swedish, and we had to go to Operations =&gt; Collation to fix it.

![Database Setup](/images/wordpress-install/Screen-Shot-2015-08-18-at-8.14.29-PM-1024x610.png)

###6.  Start your servers.
Once your preferences are set and your database is ready, cross your fingers, say a prayer, and click 'Start Servers'.  (The first time I tried to do this, I ended up with a *very* angry-sounding error message.)

![Start your servers](/images/wordpress-install/Screen-Shot-2015-08-18-at-4.28.40-PM1.png)

###7.  Install Wordpress.
**Open your browser and type in 'localhost:8888'.**

If all goes well, you should get an index page, which includes the re-named wordpress folder you created in step 4.  When you click on your folder, you should get a WordPress setup page.  Select 'English' (or your language of choice), read through the next page, and click 'Let's go!'

Once you get to the next page, enter the name of the database you created in step 5.  Because you are the account administrator, your database username and password are both 'root'.  

[WordPress username/password](/images/wordpress-install/Screen-Shot-2015-08-18-at-8.33.00-PM-1024x610.png)

Create a site title, username, and password.  You can change this later, but you will use this information to log-in to WordPress.  Once WordPress has installed, you should see your dashboard.  From here, you can install your theme, import your content, and create your beautiful WordPress blog.  When you are ready to launch your blog, you can use FTP to move your theme files from your local computer to your host.

**To access your dashboard again, open MAMP, start your servers, and go to 'localhost:8888/yourblogname/wp-login.php'.**

![WordPress login](/images/wordpress-install/Screen-Shot-2015-08-19-at-11.57.25-AM-1024x614.png)

<hr />

#Are you still wondering?
Hit me up in the comments or [contact me](http://www.beccanelsonmakesthings.com/contact/) if you have questions.  In the mean time, here are some great articles for reference.

[Skillcrush - How to Install WordPress on Your Mac](http://skillcrush.com/2015/04/14/install-wordpress-mac/)

[WPbeginner - How to Install WordPress on your Windows Computer Using WAMP](http://www.wpbeginner.com/wp-tutorials/how-to-install-wordpress-on-your-windows-computer-using-wamp/)
