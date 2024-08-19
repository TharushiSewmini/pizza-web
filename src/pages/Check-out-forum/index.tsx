import React from "react";
import "./index.css";
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Mentions,
  Radio,
  Select,
  TreeSelect,
} from "antd";

const { RangePicker } = DatePicker;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};
const CheckoutForum = () => {
  return (
    <div className="checkout-forum-container">
      <div className="checkout-form-customer-detail">Customer Details</div>
      <Form
        {...formItemLayout}
        variant="filled"
        style={{ maxWidth: 600 }}
        className="checkout-forum-forum"
      >
        <Form.Item
          label="First Name : "
          name="FirstName"
          className="checkout-forum-item"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Last Name : "
          name="LastName"
          className="checkout-forum-item"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Address : "
          name="Address"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Contact"
          name="Contact Number"
          className="checkout-forum-item"
          rules={[
            {
              required: true,

              type: "number",
            },
          ]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          label="Email"
          name="Email"
          className="checkout-forum-item"
          rules={[{ required: true, message: "Please input!", type: "email" }]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item label="Notes" name="Notes">
          <Input.TextArea />
        </Form.Item>

        <div className="checkout-form-customer-detail">
          How would you like to pay
        </div>

        <Form.Item>
          <Radio.Group>
            <Radio value="apple"> Pay Online </Radio>
            <Radio value="pear"> Pay on Pickup </Radio>
          </Radio.Group>
        </Form.Item>
      </Form>

      <Form.Item
        wrapperCol={{ offset: 6, span: 16 }}
        className="checkout-forum-last-button"
        style={{
          margin: "auto",
        }}
      >
        <Button
          type="primary"
          htmlType="submit"
          className="checkout-forum-button"
        >
          Proceed Order
        </Button>
      </Form.Item>
    </div>
  );
};

export default CheckoutForum;
