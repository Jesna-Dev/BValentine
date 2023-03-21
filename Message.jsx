import React, { useState } from 'react';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';

const LocalizedModal = () => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };
  const hideOk = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
      ʏᴇꜱ 
      </Button>
      <Modal
        title="ᴍᴇꜱꜱᴀɢᴇ ꜰᴏʀ ᴜ"
        open={open}
        onOk={hideOk}
        onCancel={hideModal}
        okText="Ok"
        // cancelText="No"
      >
        <p>“𝖳𝗁𝖾 𝗆𝗈𝗋𝖾 𝗒𝖾𝖺𝗋𝗌 𝗀𝗈 𝖻𝗒, 𝗍𝗁𝖾 𝗆𝗈𝗋𝖾 𝖨 𝗅𝖾𝖺𝗋𝗇 𝗇𝖾𝗐 𝗍𝗁𝗂𝗇𝗀𝗌 𝗍𝗈 𝗅𝗈𝗏𝖾 𝖺𝖻𝗈𝗎𝗍 𝗒𝗈𝗎. 𝖸𝗈𝗎 𝖺𝗋𝖾 𝗍𝗁𝖾 𝗆𝗈𝗌𝗍 𝖺𝗆𝖺𝗓𝗂𝗇𝗀 𝗍𝗈 𝗆𝖾.”.</p>
        
      </Modal>
    </>
  );
};

const confirm = () => {
  Modal.confirm({
    title: 'ᴡʜʏ',
    icon: <ExclamationCircleOutlined />,
    content: '𝖭𝗈 𝗈𝗍𝗁𝖾𝗋 𝗈𝗉𝗍𝗂𝗈𝗇 𝖼𝗁𝖺𝗇𝗀𝖾 𝗎𝗋 𝗆𝗂𝗇𝖽',
    okText: 'Ok',
    // cancelText: 'No',
  });
};

const Message: React.FC = () => (
  <Space>
    <LocalizedModal />
    <Button onClick={confirm}>ɴᴏ</Button>
  </Space>
);

export default Message;