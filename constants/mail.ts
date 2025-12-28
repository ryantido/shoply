export const emailVerificationHtml = (user: { name: string }, url: string) =>
  `
        <body style="font-family: Arial, sans-serif; background-color: #f9f9f9; margin: 0 auto; padding: 0;">
          <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
            <tr>
              <td style="padding: 20px; text-align: center; background-color: #2563eb; color: #ffffff;">
                <h1 style="margin: 0 auto; font-size: 24px;">Bienvenue sur Shoply</h1>
              </td>
            </tr>
            <tr>
              <td style="padding: 20px; color: #333333;">
                <p style="font-size: 16px; margin-bottom: 16px;">
                  Bienvenue <strong>${user.name ?? ""}</strong>,
                </p>
                <p style="font-size: 16px; margin-bottom: 16px;">
                  Merci de vous être inscrit sur <strong>Shoply</strong> ! Pour finaliser votre inscription, veuillez vérifier votre adresse email.
                </p>
                <p style="margin: 30px 0;">
                  <a href="${url}" style="display: inline-block; background-color: #2563eb; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: bold;">
                    Vérifier mon adresse
                  </a>
                </p>
                <p style="font-size: 14px; color: #666666; margin-top: 20px;">
                  Si le bouton ne fonctionne pas, copiez-collez le lien suivant dans votre navigateur :
                </p>
                <p style="font-size: 12px; word-break: break-all; background-color: #f4f4f4; padding: 10px; border-radius: 4px;">
                  ${url}
                </p>
                <p style="font-size: 14px; color: #999999; margin-top: 30px;">
                  Si vous n'avez pas créé de compte sur Shoply, vous pouvez ignorer cet email.
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding: 20px; text-align: center; font-size: 12px; color: #999999; background-color: #f1f1f1;">
                &copy; ${new Date().getFullYear()} Shoply. Tous droits réservés.
              </td>
            </tr>
          </table>
        </body>
      ` as const;

export const resetPasswordHtml = (user: { name: string }, url: string) =>
  `
        <body style="font-family: Arial, sans-serif; background-color: #f9f9f9; margin: 0 auto; padding: 0;">
          <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
            <tr>
              <td style="padding: 20px; text-align: center; background-color: #2563eb; color: #ffffff;">
                <h1 style="margin: 0 auto; font-size: 24px;">Bienvenue sur Shoply</h1>
              </td>
            </tr>
            <tr>
              <td style="padding: 20px; color: #333333;">
                <p style="font-size: 16px; margin-bottom: 16px;">
                  Bienvenue <strong>${user.name ?? ""}</strong>,
                </p>
                <p style="font-size: 16px; margin-bottom: 16px;">
                  Veuillez cliquer sur le lien ci-dessous pour réinitialiser votre mot de passe.
                </p>
                <p style="margin: 30px 0;">
                  <a href="${url}" style="display: inline-block; background-color: #2563eb; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: bold;">
                    Réinitialiser mon mot de passe
                  </a>
                </p>
                <p style="font-size: 14px; color: #666666; margin-top: 20px;">
                  Si le bouton ne fonctionne pas, copiez-collez le lien suivant dans votre navigateur :
                </p>
                <p style="font-size: 12px; word-break: break-all; background-color: #f4f4f4; padding: 10px; border-radius: 4px;">
                  ${url}
                </p>
                <p style="font-size: 14px; color: #999999; margin-top: 30px;">
                  Si vous n'avez pas demandé une réinitialisation de mot de passe, vous pouvez ignorer cet email.
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding: 20px; text-align: center; font-size: 12px; color: #999999; background-color: #f1f1f1;">
                &copy; ${new Date().getFullYear()} Shoply. Tous droits réservés.
              </td>
            </tr>
          </table>
        </body>
      ` as const;
