# Installation Guide

Visual Studio Code
https://code.visualstudio.com/download

Git for Windows
https://git-scm.com/downloads/win

Restart computer 

Open VS Code → Ctrl + Shift + P → type "Select Default Profile".
Select Git Bash.

Since now bash will be a default Terminal

You can use VSC terminal or you will have app Git Bash installed on your computer


# GitHub

Crete an account on github
https://github.com/

Click on your icon in right top corner. 
From menu select Settings.
On Settings page, from left side menu select SSH and GPG keys. And then button "New SSH key"

Title like you wish ( to help you identify computer you are connecting)
Key: your ssh key - below you will find instruction how to generate  (1)


#### Generating SSH public key

Open GitBash and paste a follwing command: 
`ssh-keygen -t ed25519 -C "your@email.com"`
(Notice that in GitBash to paste press Control+Insert , to copy press Shift+Insert) 

-t ed25519 → modern algorithm (recommeded)
-C → comment (i.e. your e-mail from github)

you will be asked for some info, but you can leave it empty by pressing just enter.

If everything went good you will have your public key available here
C:\Users\\<your_name>\\.ssh\id_ed25519.pub

you can open it in notepad or via command: 
`cat ~/.ssh/id_ed25519.pub`

copy your key - it looks like this:
ssh-ed25519 BSAAC3NzaC1lZDI1NTE5AAAAILca7kOw/HtgKlBcnIFk3OahfJ+766svSH7dgBSziSo9
(remember that to copu to use Shift+ Instert keys)

and you can paste it into github (1)

# Preparing repository

Now you can clone repository

Go to the folder you want to have your repo i.e C:\Users\\<your_name>\\Projects ( create folder whenver you want and open it).

Being in destination folder ( i.e Projects click the right mouse button and select "Open GitBash here" 
and in terminal paste following command ( pasiting in GitBash: Shift+Insert): 

`git clone git@github.com:qmauto/qualityminds-playwright.git`

Open Visual Studio Code and open this project ( select folder qualityminds-playwright and click open)
To open terminal in VSC click View -> Terminal

## Preparation to run tests

Instal NodeJS ( with option: add to Path)

https://nodejs.org/

restart may be needed

check in terminal if it is installed ( you can use VSC teminal or GitBash - up to you)
`node -v`
`npm -v`

Be sure you are in the project folder 

install dependencies from package.json
`npm install`

When it is done install browsers
`npx playwright install`


### *YOU ARE READY TO RUN TESTS* 

Running all

`npx playwright test`. <== **YOUR BASIC COMMAND**

Optionally with UI mode 

`npx playwright test --ui`
or headed ( when you see how the test is running)

`npx playwright test --headed`


Single file with tests - here home.spec.ts:

`npx playwright test home.spec.ts`


## Running Tests via GitHub Actions (Manual Workflow Dispatch)

You can manually run Playwright tests via GitHub Actions:

1. Go to your repository on GitHub
2. Click on the **Actions** tab
3. In the left sidebar, select **Playwright Tests** workflow
4. Click the **Run workflow** button (on the right side)
5. Select the branch you want to run tests on
6. Click the green **Run workflow** button

The workflow will execute and you can monitor its progress. After completion, you can download the `playwright-report` artifact to view test results.
