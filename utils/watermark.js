export function watermark(user=""){

const date = new Date().toISOString();

return `

/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

__OWN__ = "_kingktn - Trương Nhật Bảo Nam"
__OBF__ = "JSarmor"
__USR__ = "${user} - Requests Protect"
__VER__ = "2.0.0"
__DATE__ = "${date}"

Discord: _kingktn | Ig: _kingktn | https://eboy.asia/p.n
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*/

`;

}
