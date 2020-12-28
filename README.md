# GS-Webhook-Posting
Google Apps Script for sending messages through a webhook on Discord. Original code is from: https://www.labnol.org/code/20563-post-message-to-discord-webhooks, but I corrected some problems with the code.

---
This repository was created to show you how to setup a webhook in Discord, then post messages with it using a Google Apps Script. Again, the code was taken from this article: https://www.labnol.org/code/20563-post-message-to-discord-webhooks, but there were some errors that I corrected.

## Creating the Webhook on Discord

To create a webhook in a server, right click on the server icon. Hover over Server Settings, then press Integerations.

You should be greeted by a page that looks somewhat like this:

<p align="center">
  <img src="https://github.com/eyx092/GS-Webhook-Posting/blob/main/Screen%20Shot%202020-12-27%20at%209.33.37%20PM.png" alt="Monkey face" style="width: 100%; height: auto;">
</p>

After that, you want to click on the button that says "Create Webhook". Your screen should now look somewhat like this:

<p align="center">
  <img src="https://github.com/eyx092/GS-Webhook-Posting/blob/main/Screen%20Shot%202020-12-27%20at%209.34.05%20PM.png" alt="Monkey face" style="width: 100%; height: auto;">
</p>

Now you want to open a Google Apps Script project in Google Drive. Click the New button, then hover over the More option. An option for a Google Apps Script should pop up. Click on that, and you should now see an editor that looks like this:

<p align="center">
  <img src="https://github.com/eyx092/GS-Webhook-Posting/blob/main/resize-image.png" alt="Monkey face" style="width: 100%; height: auto;">
</p>

Copy and paste the code from the [script.gs](https://github.com/eyx092/GS-Webhook-Posting/blob/main/script.gs) file into the editor. Now click on the blue button that says Deploy. You should now see three options: New Deployment, Manage Deployments, and Test Deployments. Click on the New Deployment option. You should now see a screen that looks like this:

<p align="center">
  <img src="https://github.com/eyx092/GS-Webhook-Posting/blob/main/Screen%20Shot%202020-12-28%20at%2011.36.25%20AM.png" alt="Monkey face" style="width: 100%; height: auto;">
</p>

Click on the gear button in the Select type box, and choose Web app. When the Configuration box pops up, you can add a description if you want to, but keep everything else the same. Click the blue Deploy button, and you should get a box that says "Deployment sucessfully updated." Click the blue Done button to exit the Deployment Menu. Now you can update the message to be sent and webhook URL to whatever you would like. To change the message sent, change the variable message to whatever you want. To change the webhook URL, change the discordUrl variable. If you don't know how to get the URL for a webhook, go back to the webhooks page on your server. There should be an option to Copy Webhook URL. Click on that, and paste the URL into the variable mentioned above. Now, save the code, and try to send a message by clicking on the Run button. The first time you run the script, it will give you a pop-up that says authorization required. Click on the Review permissions button and select the google account you set up the script with. When you get to a pop-up that says Google hasn't verified this app, click on the Advanced button and click on the link that says Go to \[Project Name] (unsafe). Click Allow when it says \[Project Name] wants access to your Google Account. Now the script should run and your webhook will send a message in the specified channel! If you want to access the script again, which is usually the case, the script project will always be in your Drive, no matter which folder you created the script in. Also, since you have already verfied the script once, when you run the script again it will not ask for verification.
