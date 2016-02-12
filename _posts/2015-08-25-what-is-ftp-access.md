---
layout: post
title:  "What is FTP Access and Why do I Need it?"
date:   2015-08-25
categories: dev-bootcamp risk-taking tech
twitter_text: "Whether you're working with a developer or editing a WordPress site yourself, FTP access will make it much easier."
---
![Whether you're working with a developer or editing a #wordpress site yourself, FTP access will make it much easier.](/images/I-wonder...-2-1024x512.jpg)

I was working on a site for one of my clients yesterday when I encountered what WordPress developers refer to as the WHITE SCREEN OF DEATH.  Gasp!  Maybe you, too, have been unfortunate enough to encounter it.  This is sometimes what happens when your code malfunctions or your plugins stop getting along nicely together or your developer makes a PHP error (cough, cough).

##Anyway, the answer to this problem—and many others—is FTP access.

I know that FTP access sounds like one of those complicated developer things that most people should never have to worry about, but it's actually a great thing to know.  It's typically one of the first things I ask for when I'm working on a WordPress site.

###So, what is FTP access anyway?

FTP stands for *File Transfer Protocol*, and it is the way to access a site's files.  When you look at a website, you see the User Interface, which includes the fonts, the layout, the images, the content, etcetera, magically appearing before your eyes.  What you *don't* see, however, are the files that tell the browser what to display on the User Interface.  For WordPress, these are your HTML, CSS, JavaScript, and PHP files.

When you access these files, they look something like this.

![FTP files](/images/ftp/Screen-Shot-2015-08-25-at-2.03.02-PM-416x400.png)

If you have never done this before, here's what you need to do.

###1.  Log into your hosting account.

For the purposes of this how-to, I will be demonstrating with <a href="http://www.bluehost.com">Bluehost</a> and <a href="http://www.godaddy.com">GoDaddy</a>, but check the bottom for resources for other hosting providers.

###2.  Find your FTP Manager.

For Bluehost, this is in your cPanel under 'file management'.

![Bluehost cPanel](images/ftp/Screen-Shot-2015-08-25-at-2.20.25-PM-1024x615.png)

For GoDaddy, you need to click 'Manage' under Hosting for your domain.  Then, go to Settings and click 'SSH &amp; SFTP'

![GoDaddy Manage](/images/ftp/Screen-Shot-2015-08-25-at-2.17.09-PM-1024x583.png)

![GoDaddy cPanel](/images/ftp/Screen-Shot-2015-08-25-at-2.33.46-PM-1024x615.png)

This is the information you need to give to a developer to allow them to access your site via FTP.

###3.  Create a new FTP account (Bluehost only).

**Create a username and password, and enter *public_html* as the directory.** (This is very important!)  If security is important to you, I would suggest creating an account just for your developer, and then deleting it when your project is finished.

![Bluehost username/password](/images/ftp/Screen-Shot-2015-08-25-at-2.40.19-PM-1024x615.png)

Once you have created an account, click Configure FTP Client at the bottom.  This is the information to give a developer.  Don't forget to give them the password you created, too.

![Bluehost username/password](/images/ftp/Screen-Shot-2015-08-25-at-2.47.08-PM-1024x599.png)

###4.  To access your files, you need to install an FTP Client.

An FTP client is a program like <a href="https://cyberduck.io/?l=en">CyberDuck</a> (I use this one) or <a href="https://filezilla-project.org/">FileZilla</a> that allows you to log in with the information you just created.  For example, in CyberDuck, click 'Open Connection' and input your login information.

![FTP Files](/images/ftp/Screen-Shot-2015-08-25-at-3.02.26-PM.png)

&nbsp;

**Note: For GoDaddy and any other hosting site that uses SFTP, make sure you select SFTP in your client.**

##That's great.  But what can I do with this?

###1.  <a href="http://www.beccanelsonmakesthings.com/2015/08/can-i-install-wordpress-on-my-own-computer/">Install WordPress on your own computer</a> and then use FTP to upload your edited theme files.

Go to wp-content =&gt; themes, and then drag the edited theme file from your computer to the FTP drive.  This allows you (or your developer) to make and approve changes to your site before they are live.

###2.  Fix the white screen of DEATH.

If you think your problem might be your theme files, log in via FTP and replace the existing theme files with the backup you ALWAYS keep on your computer (because you're a responsible WordPress user).

If you think a malfunctioning plugin is to blame, go to wp-content =&gt; plugins and remove each plugin (or temporarily drag them to a different folder) and refresh your screen until you find the offender.

###3.  Impress other people with your superior intellect.
Not that I have *ever* done this before...

<hr />

##Are you still wondering?##

Leave a comment or <a href="http://www.beccanelsonmakesthings.com/contact/">contact me</a> if you have questions.  In the mean time, here are some more resources.

<a href="https://my.bluehost.com/cgi/help/ftpaccounts">Bluehost - How to create an FTP Account</a>

<a href="https://www.godaddy.com/help/add-ftp-users-1236">GoDaddy - Add FTP users</a>

<a href="http://support.hostgator.com/articles/how-to-create-an-ftp-account-in-cpanel">HostGator - How to create a FTP account in cPanel</a>

<a href="https://codex.wordpress.org/FTP_Clients">WordPress Codex - FTP Clients</a>

<a href="http://www.wpbeginner.com/beginners-guide/how-to-use-ftp-to-upload-files-to-wordpress-for-beginners/">WPbeginner - How to use FTP to upload files to WordPress for Beginners</a>
