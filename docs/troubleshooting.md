---
sidebar_position: 2
---

# Troubleshooting

Here are a list of common issues and errors you might find while using our bots, along with step-by-step instructions on how to fix them.

## "I need the **View Channel** and **Send Messages** permissions in this channel." {#no-view-or-send-permission}

![No View or Send permission](./img/no_view_or_send_permission.png)

### Why this happened {#no-view-or-send-permission-explanation}

This error typically occurs when the bot lacks the **View Channel** and/or **Send Messages** permissions in the channel that you ran the command in.

:::note

This error specifically points to the channel that you ran the command in, and not the channel that the bot is trying to connect to (if applicable).

:::

### How to fix this {#no-view-or-send-permission-fix}

1. Hover over the channel name in the left sidebar, and click the **Edit Channel** button.

    ![Edit Channel step](./img/edit_channel.png)

2. Click the **Permissions** tab.

    ![Permissions tab](./img/permissions.png)

3. Scroll down to **Advanced permissions**, and click on the **+** button next to "Roles/Members".

    ![Advanced permissions](./img/advanced_permissions.png)

4. In the pop-up, search for the bot's name, and click on it to give it a "Permission Override".

    ![Search for bot](./img/search.png)

5. Under **General Channel Permissions**, enable the **View Channel** permission.

    ![View Channel permission](./img/view_channel.png)

6. Under **Text Channel Permissions**, enable the **Send Messages** permission.

    ![Send Messages permission](./img/send_messages_text.png)

    :::note

    If you are running the command in a "Voice Channel Chat", the permission will be found under **Voice Channel Chat Permissions**.

    ![Send Messages permission for voice channel chat](./img/send_messages_voice.png)

    :::

7. Click the **Save Changes** button.

    ![Save Changes button](./img/save_changes.png)

## "I need the **Connect** and **Speak** permissions in the voice channel." {#no-connect-or-speak-permission}

![No Connect or Speak permission](./img/no_connect_or_speak_permission.png)

### Why this happened {#no-connect-or-speak-permission-explanation}

This error typically occurs when the bot lacks the **Connect** and/or **Speak** permissions in the voice/stage channel that it's trying to join.

:::note

This error specifically points to the voice/stage channel that it's trying to join (most likely the channel you're in), and not the channel that the command is being run in.

:::

### How to fix this {#no-connect-or-speak-permission-fix}

1. Hover over the channel name in the left sidebar, and click the **Edit Channel** button.

    ![Edit Channel step](./img/edit_channel.png)

2. Click the **Permissions** tab.

    ![Permissions tab](./img/permissions.png)

3. Scroll down to **Advanced permissions**, and click on the **+** button next to "Roles/Members".

    ![Advanced permissions](./img/advanced_permissions.png)

4. In the pop-up, search for the bot's name, and click on it to give it a "Permission Override".

    ![Search for bot](./img/search.png)

5. Under **Voice Channel Permissions**, enable the **Connect** and **Speak** permissions.

    ![Connect and Speak permissions](./img/connect_and_speak.png)

6. Click the **Save Changes** button.

    ![Save Changes button](./img/save_changes.png)
