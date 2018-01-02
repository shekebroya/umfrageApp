const keys = require('../../config/keys');

module.exports = survey => {
  return `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <title>Umfrage App</title>
      <style type="text/css">
    #outlook a{padding:0;}
    .ReadMsgBody{width:100%;} .ExternalClass{width:100%;}
    .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {line-height: 100%;}
    body, table, td, p, a, li, blockquote{-webkit-text-size-adjust:100%; -ms-text-size-adjust:100%;}
    table, td{mso-table-lspace:0pt; mso-table-rspace:0pt;}
    img{-ms-interpolation-mode:bicubic;}
    body{margin:0; padding:0;}
    img{border:0; height:auto; line-height:100%; outline:none; text-decoration:none;}
    table{border-collapse:collapse !important;}
    body, #bodyTable, #bodyCell{height:100% !important; margin:0; padding:0; width:100% !important;}

    /* ========== Page Styles ========== */
    #bodyCell{padding:20px;}
    #templateContainer{
      width:600px;
      border: 3px solid #ffffff;
    }

    body, #bodyTable{
       background-color:#82c4d4;
    }

    h1{
       color:#202020 !important;
      display:block;
       font-family:Helvetica;
       font-size:26px;
       font-style:normal;
       font-weight:bold;
       line-height:100%;
       letter-spacing:normal;
      margin-top:0;
      margin-right:0;
      margin-bottom:10px;
      margin-left:0;
       text-align:left;
    }

    h2{
       color:#404040 !important;
      display:block;
       font-family:Helvetica;
       font-size:20px;
       font-style:normal;
       font-weight:bold;
       line-height:100%;
       letter-spacing:normal;
      margin-top:0;
      margin-right:0;
      margin-bottom:10px;
      margin-left:0;
       text-align:left;
    }

    h3{
       color:#606060 !important;
      display:block;
       font-family:Helvetica;
       font-size:16px;
       font-style:italic;
       font-weight:normal;
       line-height:100%;
       letter-spacing:normal;
      margin-top:0;
      margin-right:0;
      margin-bottom:10px;
      margin-left:0;
       text-align:left;
    }
    h4{
       color:#808080 !important;
      display:block;
       font-family:Helvetica;
       font-size:14px;
       font-style:italic;
       font-weight:normal;
       line-height:100%;
       letter-spacing:normal;
      margin-top:0;
      margin-right:0;
      margin-bottom:10px;
      margin-left:0;
       text-align:left;
    }
    /* ========== Header Styles ========== */
    #templatePreheader{
       background-color:#7bb9d7;
    }
    .preheaderContent{
       color:#ffffff;
       font-family:Helvetica;
       font-size:10px;
       line-height:125%;
       text-align:left;
    }
    .preheaderContent a:link, .preheaderContent a:visited, .preheaderContent a .yshortcuts {
       color:#606060;
       font-weight:normal;
       text-decoration:underline;
    }
    #templateHeader{
       background-color:#F4F4F4;
    }
    .headerContent{
       color:#ffffff;
       font-family:Helvetica;
       font-size:20px;
       font-weight:bold;
       line-height:100%;
       padding-top:0;
       padding-right:0;
       padding-bottom:0;
       padding-left:0;
       text-align:left;
       vertical-align:middle;
    }

    .headerContent a:link, .headerContent a:visited,.headerContent a .yshortcuts{
       color:#EB4102;
       font-weight:normal;
       text-decoration:underline;
    }
    #headerImage{
      height:auto;
      max-width:600px;
    }
    /* ========== Body Styles ========== */

    #templateBody{
       background-color:#ffffff;
    }

    .bodyContent{
       color:#505050;
       font-family:Helvetica;
       font-size:14px;
       line-height:150%;
      padding-top:20px;
      padding-right:20px;
      padding-bottom:20px;
      padding-left:20px;
       text-align:left;
    }

    .bodyContent a:link, .bodyContent a:visited, .bodyContent a .yshortcuts {
       color:#EB4102;
       font-weight:normal;
       text-decoration:underline;
    }
    .bodyContent img{
      display:inline;
      height:auto;
      max-width:560px;
    }
    /* ========== Footer Styles ========== */

    #templateFooter{
       background-color:#7bb9d7;
    }

    .footerContent{
       color:#ffffff;
       font-family:Helvetica;
       font-size:10px;
       line-height:150%;
      padding-top:20px;
      padding-right:20px;
      padding-bottom:20px;
      padding-left:20px;
       text-align:left;
    }

    .footerContent a:link, .footerContent a:visited, .footerContent a .yshortcuts, .footerContent a span {
       color:#ffffff;
       font-weight:normal;
       text-decoration:underline;
    }

    @media only screen and (max-width: 480px){
      body, table, td, p, a, li, blockquote{-webkit-text-size-adjust:none !important;}
      body{width:100% !important; min-width:100% !important;
    }

      #bodyCell{padding:10px !important;}

      /* ======== Page Styles ======== */

      #templateContainer{
        max-width:600px !important;
         width:100% !important;
      }

      h1{
         font-size:24px !important;
         line-height:100% !important;
      }

      h2{
         font-size:20px !important;
         line-height:100% !important;
      }

      h3{
         font-size:18px !important;
         line-height:100% !important;
      }

      h4{
         font-size:16px !important;
         line-height:100% !important;
      }
      /* ======== Header Styles ======== */
      #templatePreheader{display:none !important;}
      .headerContent{
         font-size:20px !important;
         line-height:125% !important;
      }
      /* ======== Body Styles ======== */

      .bodyContent{
         font-size:18px !important;
         line-height:125% !important;
      }
      /* ======== Footer Styles ======== */
      .footerContent{
        font-size:14px !important;
         line-height:115% !important;
      }
      .footerContent a{display:block !important;}
    }
  </style>
  </head>
  <body leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0">
    <center>
        <table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable">
            <tr>
                <td align="center" valign="top" id="bodyCell">
                    <!-- BEGIN TEMPLATE // -->
                    <table border="0" cellpadding="0" cellspacing="0" id="templateContainer">
                        <tr>
                            <td align="center" valign="top">
                                <!-- BEGIN PREHEADER // -->
                                  <table border="0" cellpadding="0" cellspacing="0" width="100%" id="templatePreheader">
                                      <tr>
                                          <td valign="top" class="preheaderContent" style="padding-top:10px; padding-right:20px; padding-bottom:10px; padding-left:20px;" mc:edit="preheader_content00">
                                               ${survey.title}
                                          </td>
                                      </tr>
                                  </table>
                                  <!-- // END PREHEADER -->
                              </td>
                          </tr>

                        <tr>
                            <td align="center" valign="top">
                                <!-- BEGIN BODY // -->
                                  <table border="0" cellpadding="0" cellspacing="0" width="100%" id="templateBody">
                                      <tr>
                                          <td valign="top" class="bodyContent" mc:edit="body_content">
                                              <h1>Beispiel-Umfrage, jede Meinung zählt.</h1>
                                              <h3>Bitte beantworten Sie die folgende Frage</h3>
                                              <div>${survey.body}</div>
                                              <br />
                                              <br />
                                              <h2>${survey.title}</h2>
                                              <div>
                                              <a href="${
                                                keys.redirectDomain
                                              }/api/umfragen/${
    survey.id
  }/ja">ja</a>
  </div>
                                              <div><a href="${
                                                keys.redirectDomain
                                              }/api/umfragen/${
    survey.id
  }/nein">nein</a></div>
                                          </td>
                                      </tr>
                                  </table>
                                  <!-- // END BODY -->
                              </td>
                          </tr>
                        <tr>
                            <td align="center" valign="top">
                                <!-- BEGIN FOOTER // -->
                                  <table border="0" cellpadding="0" cellspacing="0" width="100%" id="templateFooter">
                                      <tr>
                                          <td valign="top" class="footerContent" mc:edit="footer_content01">
                                              <em>Copyright &copy; 2017 https://arcane-river-96772.herokuapp.com, All rights reserved.</em>
                                              <br />
                                              Umfrage-App ist ein einfaches Tool zur Erstellung von Umfragen. Die erstellten Umfragen werden per Mail versendet. Die Antworten werden gespeichert, ausgewertet und grafisch dargestellt.
                                              <br />
                                              <br />
                                              <strong>Unsere Email-Adresse lautet:</strong>
                                              <br />
                                              umfrage@arcane-river-96772.herokuapp.com
                                          </td>
                                      </tr>

                                  </table>
                                  <!-- // END FOOTER -->
                              </td>
                          </tr>
                      </table>
                      <!-- // END TEMPLATE -->
                  </td>
              </tr>
          </table>
      </center>
  </body>
</html>

  `;
};
