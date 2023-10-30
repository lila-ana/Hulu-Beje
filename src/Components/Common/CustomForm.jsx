import React from "react";
import { Form } from 'antd';
import CustomButton from "./CustomButton";

export default function CustomForm({ formFields, onSubmit, component, initialValues = {}, label  }) {
  const [form] = Form.useForm();


  return (
    <Form form={form} name="custom-form" onFinish={onSubmit} initialValues={initialValues}>
      {formFields.map((field, index) => (
        <Form.Item
          key={index}
          name={field.name}
          type={field.htmlType}
          label={field.label}
          rules={field.rules}
        >
          {field.component}
        </Form.Item>
      ))}
      <Form.Item>
        <CustomButton label={label} htmlType="submit" />
      </Form.Item>
    </Form>
  );
}
