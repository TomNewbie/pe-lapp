<?xml version="1.0" encoding="UTF-8"?>
<WebServiceRequestEntity>
   <description></description>
   <name>PATCH user profile</name>
   <tag></tag>
   <elementGuidId>ad16e74a-c723-446c-ab34-c71c964721e5</elementGuidId>
   <selectorMethod>BASIC</selectorMethod>
   <useRalativeImagePath>false</useRalativeImagePath>
   <autoUpdateContent>true</autoUpdateContent>
   <connectionTimeout>-1</connectionTimeout>
   <followRedirects>false</followRedirects>
   <httpBody></httpBody>
   <httpBodyContent>{
  &quot;text&quot;: &quot;{\&quot;major\&quot;: \&quot;${major}\&quot;,\n\&quot;intake\&quot;: \&quot;${intake}\&quot;,\n\&quot;phone_number\&quot;: \&quot;${phone_number}\&quot;}&quot;,
  &quot;contentType&quot;: &quot;application/json&quot;,
  &quot;charset&quot;: &quot;UTF-8&quot;
}</httpBodyContent>
   <httpBodyType>text</httpBodyType>
   <httpHeaderProperties>
      <isSelected>true</isSelected>
      <matchCondition>equals</matchCondition>
      <name>Content-Type</name>
      <type>Main</type>
      <value>application/json</value>
      <webElementGuid>ea2243a7-4715-4770-97e9-464da80c28ba</webElementGuid>
   </httpHeaderProperties>
   <httpHeaderProperties>
      <isSelected>true</isSelected>
      <matchCondition>equals</matchCondition>
      <name>Cookie</name>
      <type>Main</type>
      <value>access_token=&quot;eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxNzIzMiIsInJvbGUiOiJzdHVkZW50IiwiaWF0IjoxNjg4ODE0Mzk5fQ.eRoA_NRFEY51w6YZ4L-qEq3pEdIKxwm9gZLekT1ia3o&quot;</value>
      <webElementGuid>3c3737da-6f33-43cd-ab36-96f5bf2c3640</webElementGuid>
   </httpHeaderProperties>
   <katalonVersion>8.6.5</katalonVersion>
   <maxResponseSize>-1</maxResponseSize>
   <migratedVersion>5.4.1</migratedVersion>
   <restRequestMethod>PATCH</restRequestMethod>
   <restUrl>${GlobalVariable.lappUrl}/api/user/profile</restUrl>
   <serviceType>RESTful</serviceType>
   <soapBody></soapBody>
   <soapHeader></soapHeader>
   <soapRequestMethod></soapRequestMethod>
   <soapServiceEndpoint></soapServiceEndpoint>
   <soapServiceFunction></soapServiceFunction>
   <socketTimeout>-1</socketTimeout>
   <useServiceInfoFromWsdl>true</useServiceInfoFromWsdl>
   <variables>
      <defaultValue>'CSE'</defaultValue>
      <description></description>
      <id>9c968fdb-6fb1-4f11-8007-0bb97d505786</id>
      <masked>false</masked>
      <name>major</name>
   </variables>
   <variables>
      <defaultValue>'0912345678'</defaultValue>
      <description></description>
      <id>997d190e-268e-47f0-98d6-3e4ba87499bc</id>
      <masked>false</masked>
      <name>phone_number</name>
   </variables>
   <variables>
      <defaultValue>'2020'</defaultValue>
      <description></description>
      <id>ce511d88-95fb-43cc-91be-fe2f375f8dc1</id>
      <masked>false</masked>
      <name>intake</name>
   </variables>
   <verificationScript>import static org.assertj.core.api.Assertions.*

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webservice.verification.WSResponseManager

import groovy.json.JsonSlurper
import internal.GlobalVariable as GlobalVariable

RequestObject request = WSResponseManager.getInstance().getCurrentRequest()

ResponseObject response = WSResponseManager.getInstance().getCurrentResponse()</verificationScript>
   <wsdlAddress></wsdlAddress>
</WebServiceRequestEntity>
